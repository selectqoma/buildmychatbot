import { ImageResponse } from "next/og";

export const alt = "BuildMyChatbot - Your own AI agent that turns questions into customers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(180deg, #dbeafe 0%, #ffffff 55%, #ffffff 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width={72} height={72} viewBox="0 0 32 32">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2563eb" />
                <stop offset="1" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <path
              d="M7 4h18a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H14.2l-5.86 4.69A1 1 0 0 1 6.75 28V24H7a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5Z"
              fill="url(#g)"
            />
            <path
              d="M16 9.2 17.5 13l3.8 1.5-3.8 1.5L16 19.8 14.5 16 10.7 14.5 14.5 13 16 9.2Z"
              fill="white"
            />
          </svg>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 700, letterSpacing: -0.5, color: "#0f172a" }}>
            <span>buildmy</span>
            <span style={{ color: "#2563eb" }}>chatbot</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            <span>Your AI agent,</span>
            <span style={{ color: "#2563eb" }}>built to sell and support.</span>
          </div>
          <div style={{ fontSize: 30, color: "#475569", lineHeight: 1.35, maxWidth: 940 }}>
            Smooth customer conversations, clearer next steps, fixed scope, EU hosting, and full source handover.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#64748b",
          }}
        >
          <span>buildmychatbot.app</span>
          <span style={{ color: "#2563eb", fontWeight: 600 }}>Owned by you • 2-week delivery</span>
        </div>
      </div>
    ),
    size
  );
}
