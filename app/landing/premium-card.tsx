"use client";

import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const PremiumCardSwapHero = () => {
  const width = 520;
  const height = 680;
  const cardDistance = 90;
  const verticalDistance = 55;
  const delay = 4500;

  const cards = useMemo(
    () => [
      {
        image: "/img/working.jpg",
        title: "Planificación",
        subtitle: "Diseñamos estrategias personalizadas",
      },
      {
        image: "/img/trak2.jpg",
        title: "Seguimiento",
        subtitle: "Monitoreamos indicadores y desempeño",
      },
      {
        image: "/img/sold.jpg",
        title: "Mejora continua",
        subtitle: "Consolidamos resultados sostenibles",
      },
    ],
    []
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);

  const cardRefs = useMemo(() => cards.map(() => React.createRef<HTMLDivElement>()), [cards]);

  const orderRef = useRef<number[]>(cards.map((_, i) => i));

  const makeSlot = (i: number, total: number) => ({
    x: i * cardDistance,
    y: -i * verticalDistance,
    z: -i * 120,
    rotationZ: i * 3,
    scale: 1 - i * 0.04,
    opacity: 1 - i * 0.12,
    zIndex: total - i,
  });

  useEffect(() => {
    const total = cardRefs.length;

    cardRefs.forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;

      const slot = makeSlot(i, total);

      gsap.set(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        scale: slot.scale,
        opacity: slot.opacity,
        rotationZ: slot.rotationZ,
        rotationX: 6,
        xPercent: -50,
        yPercent: -50,
        zIndex: slot.zIndex,
        force3D: true,
      });
    });

    const swapCards = () => {
      const [front, ...rest] = orderRef.current;
      const frontEl = cardRefs[front].current;
      if (!frontEl) return;

      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.to(frontEl, {
        x: "+=140",
        y: "+=700",
        rotationZ: -12,
        opacity: 0.35,
        duration: 1.15,
        ease: "power3.in",
      });

      tl.addLabel("promote", "-=0.7");

      rest.forEach((idx, i) => {
        const el = cardRefs[idx].current;
        if (!el) return;

        const slot = makeSlot(i, total);

        tl.set(el, { zIndex: slot.zIndex }, "promote");

        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            scale: slot.scale,
            opacity: slot.opacity,
            rotationZ: slot.rotationZ,
            duration: 1.4,
            ease: "elastic.out(0.7,0.9)",
          },
          `promote+=${i * 0.06}`
        );
      });

      const backSlot = makeSlot(total - 1, total);

      tl.addLabel("return", "promote+=0.2");

      tl.call(() => {
        gsap.set(frontEl, { zIndex: backSlot.zIndex });
      });

      tl.to(
        frontEl,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          scale: backSlot.scale,
          opacity: backSlot.opacity,
          rotationZ: backSlot.rotationZ,
          rotationX: 6,
          duration: 1.5,
          ease: "elastic.out(0.6,0.8)",
        },
        "return"
      );

      tl.call(() => {
        orderRef.current = [...rest, front];
      });
    };

    swapCards();
    intervalRef.current = window.setInterval(swapCards, delay);

    return () => {
      timelineRef.current?.kill();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cardRefs]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const move = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      gsap.to(container, {
        rotationY: (x - 0.5) * 10,
        rotationX: -(y - 0.5) * 8,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    const reset = () => {
      gsap.to(container, {
        rotationY: 0,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", move);
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener("mousemove", move);
      container.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "radial-gradient(circle at top, #050507 90% #09090f 45%, #1a1a2e 0%)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "0 12vw",
          position: "relative",
        }}
      >
        {/* LEFT */}

        <div style={{ maxWidth: 580, zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              padding: "0.5rem 0.9rem",
              borderRadius: 999,
              marginBottom: "1.5rem",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: ".75rem",
              fontWeight: 600,
              letterSpacing: ".08em",
              backdropFilter: "blur(10px)",
            }}
          >
            LIDER EN GESTIÓN INTEGRAL DE RIESGOS
          </div>

          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(4rem,7vw,7rem)",
              lineHeight: 0.92,
              fontWeight: 800,
              letterSpacing: "-0.06em",
              marginBottom: "1.5rem",
            }}
          >
            Team
            <br />
            Consulting
            <br />
            Perú
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.68)",
              fontSize: "1.4rem",
              lineHeight: 1.8,
              maxWidth: 520,
              marginBottom: "2.5rem",
            }}
          >
            Transformamos la Gestión de Riesgos en una Ventaja Competitiva para su Empresa
          </p>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              style={{
                height: 56,
                padding: "0 1.5rem",
                borderRadius: 18,
                border: "none",
                background: "linear-gradient(135deg,#a855f7,#6366f1)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 10px 40px rgba(168,85,247,.35)",
              }}
            >
              !Empecemos!
            </button>

            <button
              style={{
                height: 56,
                padding: "0 1.5rem",
                borderRadius: 18,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
                backdropFilter: "blur(10px)",
              }}
            >
              Video de presentación
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: 2200,
          }}
        >
          <div
            ref={containerRef}
            style={{
              position: "relative",
              width,
              height,
              transformStyle: "preserve-3d",
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                ref={cardRefs[i]}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width,
                  height,
                  overflow: "hidden",
                  borderRadius: 36,
                  background: "#111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: `
                    0 30px 80px rgba(0,0,0,.45),
                    0 60px 140px rgba(0,0,0,.55),
                    inset 0 1px 0 rgba(255,255,255,.08)
                  `,
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(1.04)",
                    filter: "brightness(.82) saturate(1.1)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `
                      linear-gradient(
                        to top,
                        rgba(0,0,0,.92) 0%,
                        rgba(0,0,0,.58) 38%,
                        rgba(0,0,0,.12) 70%,
                        rgba(0,0,0,.02) 100%
                      )
                    `,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `
                      radial-gradient(
                        circle at top left,
                        rgba(255,255,255,.18),
                        transparent 38%
                      )
                    `,
                    mixBlendMode: "screen",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    left: 34,
                    right: 34,
                    bottom: 34,
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      padding: ".45rem .8rem",
                      borderRadius: 999,
                      marginBottom: "1rem",
                      background: "rgba(255,255,255,.08)",
                      border: "1px solid rgba(255,255,255,.12)",
                      backdropFilter: "blur(10px)",
                      color: "#fff",
                      fontSize: ".90rem",
                      fontWeight: 600,
                      letterSpacing: ".04em",
                    }}
                  >
                    Más de 10 años de experiencia
                  </div>

                  <h2
                    style={{
                      color: "#fff",
                      fontSize: "2.7rem",
                      lineHeight: 1.02,
                      fontWeight: 700,
                      marginBottom: ".8rem",
                    }}
                  >
                    {card.title}
                  </h2>

                  <p
                    style={{
                      color: "rgba(255,255,255,.72)",
                      fontSize: "1rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {card.subtitle}
                  </p>
                </div>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                    border: "1px solid rgba(255,255,255,.08)",
                    boxShadow: `
                      inset 0 1px 0 rgba(255,255,255,.12),
                      inset 0 -1px 0 rgba(255,255,255,.04)
                    `,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumCardSwapHero;
