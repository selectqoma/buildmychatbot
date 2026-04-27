import base64
import io
import os
import time
from typing import Optional

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from PIL import Image, ImageFilter

app = FastAPI(title="Tattoo Local SD 1.5 Inpaint")

MODEL_ID = os.getenv(
    "TATTOO_LOCAL_SD15_MODEL",
    "stable-diffusion-v1-5/stable-diffusion-inpainting",
)

pipe = None
device = None


class InpaintRequest(BaseModel):
    image: str
    mask: str
    prompt: str
    negative_prompt: str = ""
    steps: int = 18
    guidance_scale: float = 5.5
    strength: float = 0.28
    max_edge: int = 640
    seed: Optional[int] = None


def data_url_to_image(data_url: str) -> Image.Image:
    if "," not in data_url:
        raise HTTPException(status_code=400, detail="Expected a data URL.")

    try:
        encoded = data_url.split(",", 1)[1]
        return Image.open(io.BytesIO(base64.b64decode(encoded))).convert("RGBA")
    except Exception as exc:
        raise HTTPException(status_code=400, detail="Invalid image data URL.") from exc


def image_to_data_url(image: Image.Image) -> str:
    output = io.BytesIO()
    image.save(output, format="PNG")
    return "data:image/png;base64," + base64.b64encode(output.getvalue()).decode("ascii")


def resize_for_model(image: Image.Image, mask: Image.Image, max_edge: int):
    width, height = image.size
    ratio = min(1.0, max_edge / max(width, height))
    target_width = max(64, int(width * ratio) // 8 * 8)
    target_height = max(64, int(height * ratio) // 8 * 8)
    target = (target_width, target_height)
    return (
        image.convert("RGB").resize(target, Image.Resampling.LANCZOS),
        mask.convert("L").resize(target, Image.Resampling.LANCZOS),
    )


def alpha_openai_mask_to_diffusers_mask(mask_image: Image.Image) -> Image.Image:
    alpha = mask_image.getchannel("A")
    pixels = alpha.point(lambda value: 255 if value < 128 else 0)
    return pixels.filter(ImageFilter.GaussianBlur(radius=2))


def load_pipeline():
    global pipe, device

    if pipe is not None:
        return pipe, device

    import torch
    from diffusers import StableDiffusionInpaintPipeline

    device = "mps" if torch.backends.mps.is_available() else "cpu"
    dtype_name = os.getenv("TATTOO_LOCAL_SD15_DTYPE", "float16")
    dtype = torch.float16 if dtype_name == "float16" else torch.float32

    kwargs = {
        "torch_dtype": dtype,
        "use_safetensors": dtype == torch.float16,
        "safety_checker": None,
        "requires_safety_checker": False,
    }

    try:
        pipe = StableDiffusionInpaintPipeline.from_pretrained(
            MODEL_ID,
            variant="fp16" if dtype == torch.float16 else None,
            **kwargs,
        )
    except Exception:
        pipe = StableDiffusionInpaintPipeline.from_pretrained(MODEL_ID, **kwargs)

    pipe = pipe.to(device)
    pipe.enable_attention_slicing()
    return pipe, device


@app.get("/health")
def health():
    return {"ok": True, "model": MODEL_ID, "loaded": pipe is not None, "device": device}


@app.post("/inpaint")
def inpaint(request: InpaintRequest):
    started = time.time()
    pipeline, runtime_device = load_pipeline()

    import torch

    original = data_url_to_image(request.image)
    input_mask = alpha_openai_mask_to_diffusers_mask(data_url_to_image(request.mask))
    model_image, model_mask = resize_for_model(
        original, input_mask, max(384, min(request.max_edge, 1024))
    )

    generator = None
    if request.seed is not None:
        try:
            generator = torch.Generator(device=runtime_device).manual_seed(request.seed)
        except Exception:
            generator = torch.Generator().manual_seed(request.seed)

    result = pipeline(
        prompt=request.prompt,
        negative_prompt=request.negative_prompt,
        image=model_image,
        mask_image=model_mask,
        num_inference_steps=max(8, min(request.steps, 50)),
        guidance_scale=max(1.0, min(request.guidance_scale, 12.0)),
        strength=max(0.05, min(request.strength, 1.0)),
        generator=generator,
    ).images[0]

    result = result.resize(original.size, Image.Resampling.LANCZOS).convert("RGBA")
    blend_mask = input_mask.filter(ImageFilter.GaussianBlur(radius=2))
    final = Image.composite(result, original, blend_mask).convert("RGB")

    return {
        "image": image_to_data_url(final),
        "meta": {
            "model": MODEL_ID,
            "device": runtime_device,
            "seconds": round(time.time() - started, 2),
            "modelSize": model_image.size,
            "steps": request.steps,
            "strength": request.strength,
        },
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=7861)
