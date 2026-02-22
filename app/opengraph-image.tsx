import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "IT-Service und Beratung Lohfelden";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "52px",
            fontWeight: "bold",
            color: "white",
            lineHeight: 1.2,
          }}
        >
          IT-Service und Beratung
        </div>
        <div
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            color: "#93c5fd",
          }}
        >
          Lohfelden
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#bfdbfe",
            fontStyle: "italic",
            marginTop: "8px",
          }}
        >
          &bdquo;Qualität spricht sich herum&ldquo;
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            "TV",
            "Computer",
            "Audio & Hifi",
            "Kaffeevollautomaten",
            "Antennen",
          ].map((service) => (
            <div
              key={service}
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: "8px",
                padding: "8px 16px",
                color: "white",
                fontSize: "18px",
              }}
            >
              {service}
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "#93c5fd",
            marginTop: "16px",
          }}
        >
          Rundstraße 30 · 34253 Lohfelden · Tel: 0561 - 5190446
        </div>
      </div>
    </div>,
    { ...size },
  );
}
