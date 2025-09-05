import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Aditya Nandan – Full-Stack & AI Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Simple dynamic OG generator; can be extended with query params
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Aditya Nandan";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background: "#0d0d0f",
          color: "white",
          fontSize: 64,
          fontFamily: "system-ui, Inter, sans-serif",
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #AF1B3F55, transparent 60%), radial-gradient(circle at 70% 50%, #0D3B6655, transparent 60%)",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.7, marginBottom: 16 }}>
          Full-Stack & AI Developer
        </div>
        <div
          style={{
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            fontSize: 92,
            maxWidth: 900,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {title}
        </div>
        <div style={{ marginTop: "auto", fontSize: 24, opacity: 0.6 }}>
          adityanandanx · next.js · typescript · ai
        </div>
      </div>
    ),
    { ...size }
  );
}
