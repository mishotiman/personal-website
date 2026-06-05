import { ImageResponse } from "next/og";

export const alt = "Michail Timanov — Health and Wellbeing Principles";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#faf8f5",
        padding: "90px",
      }}
    >
      {/* Navy "M" mark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 92,
          height: 92,
          borderRadius: 50,
          backgroundColor: "#1a2b4a",
          color: "#ffffff",
          fontSize: 60,
          fontWeight: 700,
        }}
      >
        M
      </div>

      <div
        style={{
          marginTop: 24,
          fontSize: 72,
          fontWeight: 700,
          color: "#2a2a28",
          letterSpacing: "-0.02em",
        }}
      >
        Michail Timanov
      </div>

      <div style={{ marginTop: 16, fontSize: 36, color: "#6b6b66" }}>
        Health and Wellbeing Principles
      </div>

      {/* navy accent rule */}
      <div
        style={{
          marginTop: 40,
          width: 120,
          height: 6,
          backgroundColor: "#1a2b4a",
        }}
      />
    </div>,
    { ...size }
  );
}
