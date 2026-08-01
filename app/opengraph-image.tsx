import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bhaume — Nepal's next-generation marketplace";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090B",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#7C3AED",
            opacity: 0.35,
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#3B82F6",
            opacity: 0.35,
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "white",
            letterSpacing: -2,
            display: "flex",
          }}
        >
          Bhaume
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#A1A1AA",
            display: "flex",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          Buy instantly, negotiate fairly, or win through live auctions
        </div>
      </div>
    ),
    { ...size }
  );
}
