import { NextResponse } from "next/server";

type TryOnRequest = {
  compositeDataUrl?: string;
  placementDataUrl?: string;
  tattooDataUrl?: string;
  maskDataUrl?: string;
  sleeve?: boolean;
  tattooConflictMode?: "blast-over" | "avoid";
  provider?: "local-blend" | "local-sd15" | "openai";
};

function buildPrompt({
  sleeve,
  tattooConflictMode,
}: {
  sleeve: boolean;
  tattooConflictMode: "blast-over" | "avoid";
}) {
  return [
    "Your job is to position the tattoo perfectly on the body.",
    "The first image already contains the user's chosen tattoo composited at the approximate desired location.",
    "For standalone tattoos, do not redraw or replace that tattoo design; only make the already-placed ink look naturally blended into the skin.",
    "You also get the isolated placed tattoo and the original tattoo drawing as reference images.",
    "Make the tattoo look real on the skin while keeping the rest of the image intact.",
    "Do not crop, zoom, isolate, reframe, replace the photo, generate a new photo, or change the background.",
    "Do not change the head, face, hair, clothing, pose, body shape, camera angle, lighting outside the tattoo area, or any non-tattoo part of the image.",
    "Use the user's approximate placement, scale, rotation, and aspect ratio from the first image.",
    "Use the original tattoo drawing for the tattoo design, not for its original size.",
    "The uploaded original tattoo drawing is the only allowed design source.",
    "Existing tattoos already on the body are not design references and must not inspire the new tattoo.",
    "Do not introduce unrelated motifs, symbols, objects, plants, animals, text, patterns, or decorative elements that are not present in the original tattoo drawing.",
    "Make your best effort to preserve the initial tattoo design exactly, including linework, symbols, proportions, layout, negative space, and overall style.",
    "Only change the tattoo design if it is absolutely necessary to make it wrap naturally on the body or fit the sleeve request, and keep any such changes minimal.",
    sleeve
      ? "Sleeve: yes. Within the original full photo only, expand and adapt the tattoo over the visible arm or leg surface around the user's chosen area like a sleeve. Keep the person and full image composition exactly as-is."
      : "Sleeve: no. Keep the tattoo as a standalone piece at the user's chosen area.",
    tattooConflictMode === "blast-over"
      ? "Existing tattoos: blast over them if the new design overlaps with them."
      : "Existing tattoos: avoid covering current tattoos where possible while keeping the new tattoo natural.",
  ].join(" ");
}

function dataUrlToBlob(dataUrl: string) {
  const [header, encoded] = dataUrl.split(",");
  const contentType = header.match(/data:(.*?);base64/)?.[1] ?? "image/png";
  const bytes = Buffer.from(encoded, "base64");
  return new Blob([bytes], { type: contentType });
}

function buildLocalPrompt({
  sleeve,
  tattooConflictMode,
}: {
  sleeve: boolean;
  tattooConflictMode: "blast-over" | "avoid";
}) {
  return [
    "realistic photo of black ink tattoo on human skin",
    "preserve the already placed tattoo artwork exactly",
    "natural skin texture, subtle ink diffusion, correct lighting, realistic edges",
    sleeve
      ? "tattoo sleeve covering the visible limb surface around the selected area"
      : "standalone tattoo at the selected area",
    tattooConflictMode === "blast-over"
      ? "new tattoo can cover existing tattoos"
      : "avoid covering existing tattoos where possible",
  ].join(", ");
}

async function runLocalSd15({
  compositeDataUrl,
  maskDataUrl,
  sleeve,
  tattooConflictMode,
}: {
  compositeDataUrl: string;
  maskDataUrl?: string;
  sleeve: boolean;
  tattooConflictMode: "blast-over" | "avoid";
}) {
  if (!maskDataUrl) {
    return NextResponse.json(
      { error: "Local SD 1.5 requires a mask." },
      { status: 400 }
    );
  }

  const localUrl =
    process.env.TATTOO_LOCAL_SD15_URL ?? "http://127.0.0.1:7861/inpaint";
  const response = await fetch(localUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      image: compositeDataUrl,
      mask: maskDataUrl,
      prompt: buildLocalPrompt({ sleeve, tattooConflictMode }),
      negative_prompt:
        "palm tree, plant, changed tattoo design, different tattoo, extra tattoo, text, logo, new object, cropped photo, isolated limb, changed background, deformed anatomy",
      steps: sleeve ? 28 : 14,
      guidance_scale: 5.5,
      strength: sleeve ? 0.78 : 0.35,
      max_edge: sleeve ? 768 : 640,
    }),
  }).catch((error: Error) => {
    throw new Error(
      `Local SD 1.5 server is not reachable at ${localUrl}. Run npm run tattoo:local first. ${error.message}`
    );
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    return NextResponse.json(
      {
        error: "Local SD 1.5 finishing pass failed.",
        detail:
          result?.detail ??
          result?.error ??
          `Local server returned ${response.status}.`,
      },
      { status: response.status }
    );
  }

  if (!result?.image) {
    return NextResponse.json(
      { error: "Local SD 1.5 returned no image." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    image: result.image,
    mode: "local-sd15",
    usage: result?.meta,
  });
}

function runLocalBlend({ compositeDataUrl }: { compositeDataUrl: string }) {
  return NextResponse.json({
    image: compositeDataUrl,
    mode: "local-blend",
    usage: {
      note: "Deterministic canvas blend. No generative model was used, so the tattoo design cannot be changed.",
    },
  });
}

export async function POST(req: Request) {
  const data = (await req.json()) as TryOnRequest;
  const {
    compositeDataUrl,
    placementDataUrl,
    tattooDataUrl,
    maskDataUrl,
    sleeve = false,
    tattooConflictMode = "blast-over",
    provider = "local-blend",
  } = data;
  const openAiApiKey = process.env.OPENAI_API_KEY;

  if (!compositeDataUrl) {
    return NextResponse.json(
      { error: "Composite preview is required." },
      { status: 400 }
    );
  }

  if (provider === "local-blend") {
    return runLocalBlend({ compositeDataUrl });
  }

  if (provider === "local-sd15") {
    try {
      return await runLocalSd15({
        compositeDataUrl,
        maskDataUrl,
        sleeve,
        tattooConflictMode,
      });
    } catch (error) {
      return NextResponse.json(
        {
          error: "Local SD 1.5 finishing pass failed.",
          detail:
            error instanceof Error
              ? error.message
              : "Could not reach the local model server.",
        },
        { status: 502 }
      );
    }
  }

  if (!openAiApiKey) {
    return NextResponse.json(
      {
        error:
          "Set OPENAI_API_KEY in .env.local to run the AI finishing pass.",
      },
      { status: 401 }
    );
  }

  const form = new FormData();
  form.append("model", process.env.OPENAI_IMAGE_MODEL ?? "gpt-image-2");
  form.append("prompt", buildPrompt({ sleeve, tattooConflictMode }));
  form.append("output_format", "png");
  form.append("quality", "high");
  form.append("size", "auto");
  const hasReferences = Boolean(placementDataUrl || tattooDataUrl);
  form.append(
    hasReferences ? "image[]" : "image",
    dataUrlToBlob(compositeDataUrl),
    "tattoo-composite.png"
  );

  if (placementDataUrl) {
    form.append(
      "image[]",
      dataUrlToBlob(placementDataUrl),
      "tattoo-placement-reference.png"
    );
  }

  if (tattooDataUrl) {
    form.append(
      "image[]",
      dataUrlToBlob(tattooDataUrl),
      "original-tattoo-drawing.png"
    );
  }

  if (maskDataUrl) {
    form.append("mask", dataUrlToBlob(maskDataUrl), "tattoo-mask.png");
  }

  const response = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openAiApiKey}`,
    },
    body: form,
  });

  const result = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      {
        error: "AI finishing pass failed.",
        detail: result?.error?.message ?? "Unknown image API error.",
      },
      { status: response.status }
    );
  }

  const b64 = result?.data?.[0]?.b64_json;

  if (!b64) {
    return NextResponse.json(
      { error: "AI finishing pass returned no image." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    image: `data:image/png;base64,${b64}`,
    mode: "ai-finished",
    usage: result?.usage,
  });
}
