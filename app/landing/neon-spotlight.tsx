"use client";

import React, { useRef, useState } from "react";

const NeonSpotlightCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const spotlightColor = "rgba(59, 130, 246, 0.70)";

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        background: "#050816",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
      }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "920px",
          minHeight: "520px",
          overflow: "hidden",
          borderRadius: "32px",
          padding: "3rem",
          background: "rgba(10,10,20,0.72)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: `
            0 10px 40px rgba(0,0,0,0.35),
            0 40px 120px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.08)
          `,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity,
            transition: "opacity 300ms ease",
            background: `
              radial-gradient(
                circle at ${position.x}px ${position.y}px,
                rgba(59,130,246,0.85) 0%,
                rgba(59,130,246,0.45) 18%,
                rgba(96,165,250,0.22) 35%,
                transparent 72%
              )
            `,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle at center, black, transparent 90%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".5rem",
              padding: ".55rem .9rem",
              borderRadius: "999px",
              marginBottom: "1.5rem",
              background: "rgba(59,130,246,0.10)",
              border: "1px solid rgba(59,130,246,0.22)",
              color: "#bfdbfe",
              fontSize: ".78rem",
              fontWeight: 600,
              letterSpacing: ".04em",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background: "#3b82f6",
                boxShadow: "0 0 18px #3b82f6",
              }}
            />
            TEAM CONSULTING PERÚ
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
              fontWeight: 800,
              letterSpacing: "-0.06em",
              marginBottom: "1.5rem",
              maxWidth: "780px",
            }}
          >
            Nuestros Valores
            <br />
            Corporativos
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.68)",
              fontSize: "1.08rem",
              lineHeight: 1.8,
              maxWidth: "960px",
              marginBottom: "2.5rem",
            }}
          >
            Promovemos una cultura organizacional basada en principios sólidos, relaciones de confianza y excelencia profesional, generando valor sostenible para nuestros clientes, colaboradores y aliados estratégicos.
          </p>

         <div className="flex flex-col items-start gap-4">
            <div className="flex justify-center gap-4">
            <button
              style={{
                height: "56px",
                padding: "0 1.5rem",
                borderRadius: "18px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(135deg,#1e40af,#3b82f6)",
                boxShadow: "0 12px 35px rgba(59,130,246,.35)",
                transition: "all .3s ease",
              }}
            >
              Honestidad e Integridad
            </button>

            <button
              style={{
                height: "56px",
                padding: "0 1.5rem",
                borderRadius: "18px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(135deg,#334155,#64748b)",
                boxShadow: "0 12px 35px rgba(100,116,139,.30)",
                transition: "all .3s ease",
              }}
            >
              Excelencia Profesional
            </button>
</div>

 <div className="flex justify-center gap-4">
            <button
              style={{
                height: "56px",
                padding: "0 1.5rem",
                borderRadius: "18px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(135deg,#0f766e,#14b8a6)",
                boxShadow: "0 12px 35px rgba(20,184,166,.30)",
                transition: "all .3s ease",
              }}
            >
              Filosofía Win to Win
            </button>

            <button
              style={{
                height: "56px",
                padding: "0 1.5rem",
                borderRadius: "18px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
                boxShadow: "0 12px 35px rgba(37,99,235,.30)",
                transition: "all .3s ease",
              }}
            >
              Ética Empresarial
            </button>

            <button
              style={{
                height: "56px",
                padding: "0 1.5rem",
                borderRadius: "18px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(135deg,#0369a1,#0284c7)",
                boxShadow: "0 12px 35px rgba(2,132,199,.30)",
                transition: "all .3s ease",
              }}
            >
              Socios Estratégicos
            </button>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: `
              inset 0 1px 0 rgba(255,255,255,0.10),
              inset 0 0 120px rgba(59,130,246,0.12),
              0 0 60px rgba(59,130,246,0.08)
            `,
          }}
        />
      </div>
    </section>
  );
};

export default NeonSpotlightCard;
