"use client";

import React, { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import Image from "next/image";

const cards = [
  {
    title: "Directivos y Líderes",
    image: "/img/direc.jpg",
    description:
      "",
    bullets: [
      "Mejor toma de decisiones.",
      "Reducción de riesgos críticos.",
      "Mayor liderazgo en seguridad.",
      "Fortalecimiento de la cultura organizacional.",
      "Sostenibilidad y competitividad empresarial.",
    ],
  },
  {
    title: "Operarios y Personal de Campo",
    image: "/img/personal.jpg",
    description:
      "",
    bullets: [
      "Menor ocurrencia de incidentes.",
      "Mayor compromiso con la seguridad.",
      "Incremento de la productividad.",
      "Mejor desempeño operativo.",
      "Incremento de productividad y calidad",
    ],
  },
];

export default function HumanCapitalSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

 const handleMove = useCallback(
  (e: React.MouseEvent | React.TouchEvent) => {
      const { left, top } = updateOffset();

      const x =
        "clientX" in e ? e.clientX : e.touches[0].clientX;

      const y =
        "clientY" in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;

        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: i === 0 ? 0.08 : 0.55,
          ease: i === 0 ? "power3.out" : "power1.out",
        });
      });
    },
    [updateOffset],
  );

  useEffect(() => {
    const resize = () => updateOffset();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [updateOffset]);

 const sizes = [50, 120, 75];
  const inner = [12, 25, 30];
  const opacities = [0.9, 0.6, 0.55];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative overflow-hidden bg-[#050816] px-6 py-28"
    >
      <svg className="absolute h-0 w-0">
        <filter id="blob">
          <feGaussianBlur
            in="SourceGraphic"
            result="blur"
            stdDeviation="28"
          />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 38 -6"
          />
        </filter>
      </svg>

     

      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-[#289bbb]/20 bg-[#289bbb]/10 px-5 py-2 text-lg font-medium text-[#6fd8f5] backdrop-blur-xl">
            Transformación Organizacional
          </div>

          <h2 className="mt-8 text-4xl font-black text-white md:text-7xl">
            Desarrollo Integral
            <br />
            <span className="bg-gradient-to-r from-[#6fd8f5] via-[#289bbb] to-[#8ce4ff] bg-clip-text text-transparent">
              del Capital Humano
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg text-slate-300 md:text-xl">
            Diseñamos programas de formación diferenciados para líderes
            estratégicos y equipos operativos, fortaleciendo capacidades,
            desempeño y resultados sostenibles dentro de la organización.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-full max-w-[520px] overflow-hidden rounded-3xl border border-[#289bbb]/20 bg-white/5 backdrop-blur-xl transition-all duration-700 hover:-translate-y-4 hover:border-[#289bbb]/50 hover:shadow-[0_30px_80px_rgba(40,155,187,0.25)]"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {card.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="text-[#289bbb]">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
        style={{ filter: "url(#blob)", zIndex: 100 }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              blobsRef.current[i] = el;
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: "50%",
             background: "#2563eb",
              opacity: opacities[i],
              boxShadow: "0 0 30px rgba(40,155,187,.45)",
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: inner[i],
                height: inner[i],
                left: (sizes[i] - inner[i]) / 2,
                top: (sizes[i] - inner[i]) / 2,
                background: "rgba(255,255,255,.95)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}