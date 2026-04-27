"use client";

import { ChangeEvent, PointerEvent, useEffect, useRef, useState } from "react";

const MAX_UPLOAD_EDGE = 1600;

type LoadedImage = {
  src: string;
  image: HTMLImageElement;
  originalSize: {
    width: number;
    height: number;
  };
  displaySize: {
    width: number;
    height: number;
  };
};

type Transform = {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
  rotation: number;
  opacity: number;
  blur: number;
  ink: number;
};

type TattooConflictMode = "blast-over" | "avoid";
type AiProvider = "local-blend" | "local-sd15" | "openai";

const initialTransform: Transform = {
  x: 420,
  y: 300,
  scaleX: 0.42,
  scaleY: 0.42,
  rotation: -8,
  opacity: 0.78,
  blur: 0.8,
  ink: 0.88,
};

function readFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function scaleImageToCeiling(
  image: HTMLImageElement,
  outputType: "image/jpeg" | "image/png"
) {
  const longestEdge = Math.max(image.naturalWidth, image.naturalHeight);

  if (longestEdge <= MAX_UPLOAD_EDGE) {
    return null;
  }

  const ratio = MAX_UPLOAD_EDGE / longestEdge;
  const width = Math.round(image.naturalWidth * ratio);
  const height = Math.round(image.naturalHeight * ratio);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(image, 0, 0, width, height);

  return {
    src: canvas.toDataURL(outputType, outputType === "image/jpeg" ? 0.9 : 1),
    width,
    height,
  };
}

function averageCornerColor(
  pixels: Uint8ClampedArray,
  width: number,
  height: number
) {
  const sampleSize = Math.max(
    1,
    Math.min(12, Math.floor(width / 8), Math.floor(height / 8))
  );
  const corners = [
    [0, 0],
    [width - sampleSize, 0],
    [0, height - sampleSize],
    [width - sampleSize, height - sampleSize],
  ];
  let red = 0;
  let green = 0;
  let blue = 0;
  let count = 0;

  for (const [startX, startY] of corners) {
    for (let y = startY; y < startY + sampleSize; y += 1) {
      for (let x = startX; x < startX + sampleSize; x += 1) {
        const index = (y * width + x) * 4;
        red += pixels[index];
        green += pixels[index + 1];
        blue += pixels[index + 2];
        count += 1;
      }
    }
  }

  return {
    red: red / count,
    green: green / count,
    blue: blue / count,
  };
}

function extractTattooCutout(image: HTMLImageElement) {
  const sourceCanvas = document.createElement("canvas");
  const sourceCtx = sourceCanvas.getContext("2d", {
    willReadFrequently: true,
  });

  if (!sourceCtx) {
    return null;
  }

  sourceCanvas.width = image.naturalWidth;
  sourceCanvas.height = image.naturalHeight;
  sourceCtx.drawImage(image, 0, 0);

  const imageData = sourceCtx.getImageData(
    0,
    0,
    sourceCanvas.width,
    sourceCanvas.height
  );
  const pixels = imageData.data;
  const background = averageCornerColor(
    pixels,
    sourceCanvas.width,
    sourceCanvas.height
  );
  let minX = sourceCanvas.width;
  let minY = sourceCanvas.height;
  let maxX = 0;
  let maxY = 0;

  for (let index = 0; index < pixels.length; index += 4) {
    const red = pixels[index];
    const green = pixels[index + 1];
    const blue = pixels[index + 2];
    const alpha = pixels[index + 3];
    const pixel = index / 4;
    const x = pixel % sourceCanvas.width;
    const y = Math.floor(pixel / sourceCanvas.width);
    const backgroundDistance = Math.hypot(
      red - background.red,
      green - background.green,
      blue - background.blue
    );
    const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;
    const chroma = Math.max(red, green, blue) - Math.min(red, green, blue);
    const isBackground =
      alpha < 12 ||
      backgroundDistance < 46 ||
      (luminance > 242 && chroma < 28);

    if (isBackground) {
      pixels[index + 3] = 0;
      continue;
    }

    pixels[index + 3] = Math.max(alpha, 225);
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }

  if (minX > maxX || minY > maxY) {
    return null;
  }

  sourceCtx.putImageData(imageData, 0, 0);

  const padding = 10;
  const cropX = Math.max(0, minX - padding);
  const cropY = Math.max(0, minY - padding);
  const cropRight = Math.min(sourceCanvas.width, maxX + padding);
  const cropBottom = Math.min(sourceCanvas.height, maxY + padding);
  const cropWidth = cropRight - cropX;
  const cropHeight = cropBottom - cropY;
  const outputCanvas = document.createElement("canvas");
  const outputCtx = outputCanvas.getContext("2d");

  if (!outputCtx) {
    return null;
  }

  outputCanvas.width = cropWidth;
  outputCanvas.height = cropHeight;
  outputCtx.drawImage(
    sourceCanvas,
    cropX,
    cropY,
    cropWidth,
    cropHeight,
    0,
    0,
    cropWidth,
    cropHeight
  );

  return {
    src: outputCanvas.toDataURL("image/png"),
    width: cropWidth,
    height: cropHeight,
  };
}

function getCanvasPoint(
  event: PointerEvent<HTMLCanvasElement>,
  canvas: HTMLCanvasElement
) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * canvas.width,
    y: ((event.clientY - rect.top) / rect.height) * canvas.height,
  };
}

function drawStage(
  canvas: HTMLCanvasElement,
  body: LoadedImage | null,
  tattoo: LoadedImage | null,
  transform: Transform,
  maskOnly = false
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (maskOnly) {
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  } else {
    ctx.fillStyle = "#e5e7eb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  if (body && !maskOnly) {
    const fit = Math.min(
      canvas.width / body.image.width,
      canvas.height / body.image.height
    );
    const width = body.image.width * fit;
    const height = body.image.height * fit;
    const x = (canvas.width - width) / 2;
    const y = (canvas.height - height) / 2;
    ctx.drawImage(body.image, x, y, width, height);
  }

  if (!tattoo) return;

  const width = tattoo.image.width * transform.scaleX;
  const height = tattoo.image.height * transform.scaleY;

  ctx.save();
  ctx.translate(transform.x, transform.y);
  ctx.rotate((transform.rotation * Math.PI) / 180);

  if (maskOnly) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(-width / 2 - 18, -height / 2 - 18, width + 36, height + 36);
  } else {
    ctx.globalAlpha = transform.opacity;
    ctx.filter = `grayscale(1) contrast(${1.25 + transform.ink * 0.5}) blur(${transform.blur}px)`;
    ctx.globalCompositeOperation = "multiply";
    ctx.drawImage(tattoo.image, -width / 2, -height / 2, width, height);

    ctx.globalAlpha = 0.16;
    ctx.filter = "blur(5px)";
    ctx.globalCompositeOperation = "soft-light";
    ctx.drawImage(tattoo.image, -width / 2, -height / 2, width, height);
  }

  ctx.restore();
}

function drawTransformedTattoo(
  canvas: HTMLCanvasElement,
  tattoo: LoadedImage,
  transform: Transform,
  options: {
    blended: boolean;
  }
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = tattoo.image.width * transform.scaleX;
  const height = tattoo.image.height * transform.scaleY;

  ctx.save();
  ctx.translate(transform.x, transform.y);
  ctx.rotate((transform.rotation * Math.PI) / 180);

  if (options.blended) {
    ctx.globalAlpha = transform.opacity;
    ctx.filter = `grayscale(1) contrast(${1.25 + transform.ink * 0.5}) blur(${transform.blur}px)`;
    ctx.globalCompositeOperation = "source-over";
  }

  ctx.drawImage(tattoo.image, -width / 2, -height / 2, width, height);
  ctx.restore();
}

function drawPlacementReference(
  canvas: HTMLCanvasElement,
  tattoo: LoadedImage,
  transform: Transform
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTransformedTattoo(canvas, tattoo, transform, { blended: false });
}

function drawInkMask(
  canvas: HTMLCanvasElement,
  tattoo: LoadedImage,
  transform: Transform
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const layer = document.createElement("canvas");
  layer.width = canvas.width;
  layer.height = canvas.height;
  drawTransformedTattoo(layer, tattoo, transform, { blended: false });

  const layerCtx = layer.getContext("2d");
  if (!layerCtx) return;

  const source = layerCtx.getImageData(0, 0, layer.width, layer.height);
  const sourcePixels = source.data;
  const inkPixels = new Uint8Array(layer.width * layer.height);

  for (let index = 0; index < sourcePixels.length; index += 4) {
    const alpha = sourcePixels[index + 3];
    if (alpha < 16) continue;

    const red = sourcePixels[index];
    const green = sourcePixels[index + 1];
    const blue = sourcePixels[index + 2];
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722;

    if (luminance < 245 || max - min > 18) {
      inkPixels[index / 4] = 1;
    }
  }

  const radius = 8;
  const mask = ctx.createImageData(canvas.width, canvas.height);
  const maskPixels = mask.data;

  for (let y = 0; y < canvas.height; y += 1) {
    for (let x = 0; x < canvas.width; x += 1) {
      const outputIndex = (y * canvas.width + x) * 4;
      const pixelIndex = y * canvas.width + x;
      let nearInk = false;

      if (inkPixels[pixelIndex]) {
        maskPixels[outputIndex] = 255;
        maskPixels[outputIndex + 1] = 255;
        maskPixels[outputIndex + 2] = 255;
        maskPixels[outputIndex + 3] = 255;
        continue;
      }

      for (let offsetY = -radius; offsetY <= radius && !nearInk; offsetY += 1) {
        const sourceY = y + offsetY;
        if (sourceY < 0 || sourceY >= canvas.height) continue;

        for (let offsetX = -radius; offsetX <= radius; offsetX += 1) {
          const sourceX = x + offsetX;
          if (sourceX < 0 || sourceX >= canvas.width) continue;
          if (offsetX * offsetX + offsetY * offsetY > radius * radius) continue;

          if (inkPixels[sourceY * canvas.width + sourceX]) {
            nearInk = true;
            break;
          }
        }
      }

      maskPixels[outputIndex] = 255;
      maskPixels[outputIndex + 1] = 255;
      maskPixels[outputIndex + 2] = 255;
      maskPixels[outputIndex + 3] = nearInk ? 0 : 255;
    }
  }

  ctx.putImageData(mask, 0, 0);
}

function drawSleeveMask(
  canvas: HTMLCanvasElement,
  tattoo: LoadedImage,
  transform: Transform
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const width = tattoo.image.width * transform.scaleX;
  const height = tattoo.image.height * transform.scaleY;
  const maskWidth = Math.min(canvas.width * 0.46, Math.max(width * 1.55, 150));
  const maskHeight = Math.min(
    canvas.height * 0.62,
    Math.max(height * 2.35, 260)
  );

  ctx.save();
  ctx.translate(transform.x, transform.y);
  ctx.rotate((transform.rotation * Math.PI) / 180);
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.beginPath();
  ctx.ellipse(0, 0, maskWidth / 2, maskHeight / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function TattooTryOn() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement>(null);
  const placementCanvasRef = useRef<HTMLCanvasElement>(null);
  const [body, setBody] = useState<LoadedImage | null>(null);
  const [tattoo, setTattoo] = useState<LoadedImage | null>(null);
  const [transform, setTransform] = useState<Transform>(initialTransform);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [sentPreview, setSentPreview] = useState<string | null>(null);
  const [sleeve, setSleeve] = useState(false);
  const [tattooConflictMode, setTattooConflictMode] =
    useState<TattooConflictMode>("blast-over");
  const [aiProvider, setAiProvider] = useState<AiProvider>("local-blend");
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState<string>("Upload both images to begin.");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    drawStage(canvas, body, tattoo, transform);
  }, [body, tattoo, transform]);

  async function onUpload(
    event: ChangeEvent<HTMLInputElement>,
    kind: "body" | "tattoo"
  ) {
    const file = event.target.files?.[0];
    if (!file) return;

    const originalSrc = await readFile(file);
    const originalImage = await loadImage(originalSrc);
    const scaled = scaleImageToCeiling(
      originalImage,
      kind === "tattoo" ? "image/png" : "image/jpeg"
    );
    const scaledSrc = scaled?.src ?? originalSrc;
    const scaledImage = scaled ? await loadImage(scaledSrc) : originalImage;
    const cutout = kind === "tattoo" ? extractTattooCutout(scaledImage) : null;
    const src = cutout?.src ?? scaledSrc;
    const image = cutout ? await loadImage(src) : scaledImage;
    const loaded = {
      src,
      image,
      originalSize: {
        width: originalImage.naturalWidth,
        height: originalImage.naturalHeight,
      },
      displaySize: {
        width: image.naturalWidth,
        height: image.naturalHeight,
      },
    };
    const sizeNote =
      kind === "tattoo" && cutout
        ? ` Extracted transparent PNG at ${loaded.displaySize.width}x${loaded.displaySize.height}.`
        : scaled
          ? ` Scaled from ${loaded.originalSize.width}x${loaded.originalSize.height} to ${loaded.displaySize.width}x${loaded.displaySize.height}.`
          : ` Kept at ${loaded.displaySize.width}x${loaded.displaySize.height}.`;

    if (kind === "body") {
      setBody(loaded);
      setGeneratedImage(null);
      setStatus(`Body photo loaded.${sizeNote} Add a tattoo design next.`);
    } else {
      setTattoo(loaded);
      setGeneratedImage(null);
      setSentPreview(null);
      setStatus(`Tattoo loaded.${sizeNote} Drag it on the photo and tune the finish.`);
    }
  }

  function startDrag(event: PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas || !tattoo) return;
    const point = getCanvasPoint(event, canvas);
    setIsDragging(true);
    setDragOffset({ x: point.x - transform.x, y: point.y - transform.y });
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: PointerEvent<HTMLCanvasElement>) {
    if (!isDragging) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const point = getCanvasPoint(event, canvas);
    setTransform((current) => ({
      ...current,
      x: point.x - dragOffset.x,
      y: point.y - dragOffset.y,
    }));
  }

  function endDrag(event: PointerEvent<HTMLCanvasElement>) {
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  function updateTransform(key: keyof Transform, value: number) {
    setTransform((current) => ({ ...current, [key]: value }));
    setGeneratedImage(null);
    setSentPreview(null);
  }

  function exportPreview() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "tattoo-try-on-preview.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  async function generateFinish() {
    const canvas = canvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    const placementCanvas = placementCanvasRef.current;
    if (!canvas || !maskCanvas || !placementCanvas || !body || !tattoo) return;

    drawStage(canvas, body, tattoo, transform);
    if (sleeve) {
      drawSleeveMask(maskCanvas, tattoo, transform);
    } else {
      drawInkMask(maskCanvas, tattoo, transform);
    }
    drawPlacementReference(placementCanvas, tattoo, transform);
    const compositeDataUrl = canvas.toDataURL("image/png");
    setSentPreview(compositeDataUrl);
    setStatus(
      aiProvider === "local-blend"
        ? "Rendering the local blend..."
        : "Sending masked placement to the image model..."
    );
    setGeneratedImage(null);
    setIsGenerating(true);

    try {
      const response = await fetch("/api/tattoo-try-on", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          compositeDataUrl,
          placementDataUrl: placementCanvas.toDataURL("image/png"),
          tattooDataUrl: tattoo.src,
          maskDataUrl: maskCanvas.toDataURL("image/png"),
          sleeve,
          tattooConflictMode,
          provider: aiProvider,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(
          result?.detail ?? result?.error ?? "Could not generate image."
        );
        return;
      }

      setGeneratedImage(result.image);
      setStatus(
        result.mode === "local-blend"
          ? "Local blended preview ready."
          : "AI finished preview ready."
      );
    } catch {
      setStatus("Could not reach the AI endpoint. Check the dev server logs.");
    } finally {
      setIsGenerating(false);
    }
  }

  const canGenerate = Boolean(body && tattoo);

  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#161616]">
      <section className="border-b border-black/10 bg-[#fffffb]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7c3f2d]">
              Tattoo try-on studio
            </p>
            <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Place ink by hand, then make it blend into skin.
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-[#4a4a44]">
            <span className="rounded-full border border-black/15 px-3 py-1">
              Upload
            </span>
            <span className="rounded-full border border-black/15 px-3 py-1">
              Drag
            </span>
            <span className="rounded-full border border-black/15 px-3 py-1">
              Blend
            </span>
            <span className="rounded-full border border-black/15 px-3 py-1">
              Export
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-5 lg:grid-cols-[320px_1fr_320px]">
        <aside className="space-y-4">
          <Panel title="Images">
            <FileControl
              label="Body photo"
              accept="image/*"
              onChange={(event) => onUpload(event, "body")}
              loaded={Boolean(body)}
            />
            <FileControl
              label="Tattoo design"
              accept="image/*"
              onChange={(event) => onUpload(event, "tattoo")}
              loaded={Boolean(tattoo)}
            />
          </Panel>

          <Panel title="Placement">
            <RangeControl
              label="Width"
              min={0.05}
              max={1.6}
              step={0.01}
              value={transform.scaleX}
              onChange={(value) => updateTransform("scaleX", value)}
            />
            <RangeControl
              label="Height"
              min={0.05}
              max={1.6}
              step={0.01}
              value={transform.scaleY}
              onChange={(value) => updateTransform("scaleY", value)}
            />
            <RangeControl
              label="Rotation"
              min={-180}
              max={180}
              step={1}
              value={transform.rotation}
              onChange={(value) => updateTransform("rotation", value)}
            />
            <button
              type="button"
              className="w-full rounded-md bg-[#1f2937] px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setTransform(initialTransform)}
            >
              Reset placement
            </button>
          </Panel>
        </aside>

        <div className="min-w-0">
          <div className="overflow-hidden border border-black/15 bg-[#111] shadow-sm">
            <canvas
              ref={canvasRef}
              width={960}
              height={720}
              className="block aspect-[4/3] w-full touch-none cursor-move"
              onPointerDown={startDrag}
              onPointerMove={moveDrag}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            />
            <canvas
              ref={maskCanvasRef}
              width={960}
              height={720}
              className="hidden"
            />
            <canvas
              ref={placementCanvasRef}
              width={960}
              height={720}
              className="hidden"
            />
          </div>
          <p className="mt-3 text-sm text-[#5d5a52]">{status}</p>
        </div>

        <aside className="space-y-4">
          <Panel title="Generation">
            <SegmentedControl
              label="Model"
              value={aiProvider}
              options={[
                { value: "local-blend", label: "Local blend" },
                { value: "local-sd15", label: "SD 1.5 exp" },
                { value: "openai", label: "GPT image" },
              ]}
              onChange={(value) => {
                setAiProvider(value as AiProvider);
                setGeneratedImage(null);
                setSentPreview(null);
              }}
            />
            <SegmentedControl
              label="Sleeve"
              value={sleeve ? "yes" : "no"}
              options={[
                { value: "no", label: "No" },
                { value: "yes", label: "Yes" },
              ]}
              onChange={(value) => {
                setSleeve(value === "yes");
                setGeneratedImage(null);
                setSentPreview(null);
              }}
            />
            <SegmentedControl
              label="Current tattoos"
              value={tattooConflictMode}
              options={[
                { value: "blast-over", label: "Blast over" },
                { value: "avoid", label: "Avoid" },
              ]}
              onChange={(value) => {
                setTattooConflictMode(value as TattooConflictMode);
                setGeneratedImage(null);
                setSentPreview(null);
              }}
            />
          </Panel>

          <Panel title="Realism">
            <RangeControl
              label="Opacity"
              min={0.2}
              max={1}
              step={0.01}
              value={transform.opacity}
              onChange={(value) => updateTransform("opacity", value)}
            />
            <RangeControl
              label="Softness"
              min={0}
              max={3}
              step={0.1}
              value={transform.blur}
              onChange={(value) => updateTransform("blur", value)}
            />
            <RangeControl
              label="Ink weight"
              min={0}
              max={1}
              step={0.01}
              value={transform.ink}
              onChange={(value) => updateTransform("ink", value)}
            />
          </Panel>

          <Panel title="Output">
            <button
              type="button"
              disabled={!canGenerate || isGenerating}
              className="w-full rounded-md bg-[#7c3f2d] px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-black/25"
              onClick={generateFinish}
            >
              {isGenerating
                ? aiProvider === "local-blend"
                  ? "Rendering..."
                  : "Generating..."
                : aiProvider === "local-blend"
                  ? "Render finish"
                  : "AI finish"}
            </button>
            <button
              type="button"
              disabled={!canGenerate || isGenerating}
              className="w-full rounded-md border border-black/15 bg-white px-4 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-45"
              onClick={exportPreview}
            >
              Export PNG
            </button>
            {generatedImage ? (
              <a
                href={generatedImage}
                download="tattoo-try-on-finished.png"
                className="block rounded-md border border-black/15 bg-[#fffffb] p-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={generatedImage}
                  alt="Finished tattoo preview"
                  className="aspect-[4/3] w-full object-cover"
                />
              </a>
            ) : null}
            {sentPreview ? (
              <a
                href={sentPreview}
                download="tattoo-try-on-ai-input.png"
                className="block rounded-md border border-black/15 bg-[#fffffb] p-2"
              >
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#5d5a52]">
                  Sent to AI
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sentPreview}
                  alt="Exact image sent to AI"
                  className="aspect-[4/3] w-full object-cover"
                />
              </a>
            ) : null}
          </Panel>
        </aside>
      </section>
    </main>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-black/15 bg-[#fffffb] p-4 shadow-sm">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#4a4a44]">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function FileControl({
  label,
  accept,
  loaded,
  onChange,
}: {
  label: string;
  accept: string;
  loaded: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block rounded-md border border-dashed border-black/25 bg-[#f7f3ee] p-4">
      <span className="block text-sm font-semibold">{label}</span>
      <span className="mt-1 block text-xs text-[#5d5a52]">
        {loaded ? "Loaded" : "Choose image"}
      </span>
      <input
        type="file"
        accept={accept}
        className="mt-3 block w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-[#1f2937] file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white"
        onChange={onChange}
      />
    </label>
  );
}

function SegmentedControl({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium">{label}</legend>
      <div className="grid grid-cols-2 rounded-md border border-black/15 bg-white p-1">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`rounded px-3 py-2 text-sm font-semibold ${
              value === option.value
                ? "bg-[#1f2937] text-white"
                : "text-[#4a4a44]"
            }`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function RangeControl({
  label,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-sm font-medium">
        <span>{label}</span>
        <span className="font-mono text-xs text-[#5d5a52]">
          {Number.isInteger(step) ? value.toFixed(0) : value.toFixed(2)}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-[#7c3f2d]"
      />
    </label>
  );
}
