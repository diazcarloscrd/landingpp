import { ImageResponse } from "next/og";

export const alt = "CDByte • Soluciones Digitales, CRM, E-Commerce y Landing Pages";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#060714",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow de fondo */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(6,7,20,0) 70%)",
          }}
        />

        {/* Header / Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 900,
            }}
          >
            {"</>"}
          </div>
          <span style={{ fontSize: "32px", fontWeight: 800, color: "white", letterSpacing: "-0.5px" }}>
            CD<span style={{ color: "#a78bfa" }}>Byte</span>
          </span>
          <span
            style={{
              marginLeft: "12px",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "rgba(139, 92, 246, 0.15)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              color: "#c4b5fd",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Software & Web Studio
          </span>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            Software y Webs a Medida para Vender Más y Ordenar tu Negocio
          </h1>
          <p
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Sistemas CRM • E-Commerce • Landing Pages • Turnos Web • Cotizadores
          </p>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "28px",
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          <span>Trato Directo 1 a 1 con el Desarrollador</span>
          <span style={{ color: "#34d399", fontWeight: 600 }}>WhatsApp Directo • Presupuestos Claros</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
