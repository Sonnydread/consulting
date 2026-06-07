"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const cards = [
  {
    title: "Corporated",
    subtitle: "International Certification",
    image: "/img/orange.jpg",
    large: true,
  },
  {
    title: "Seminars",
    subtitle: "Global Training",
    image: "/img/konst.jpg",
  },
  {
    title: "Competition",
    subtitle: "Elite Performance",
    image: "/img/serv.jpg",
  },
  {
    title: "Masters",
    subtitle: "Professional Coaching",
    image: "/img/trak1.jpg",
  },
  {
    title: "Events",
    subtitle: "Worldwide Community",
    image: "/img/trucks.jpg",
  },
  {
    title: "Academies",
    subtitle: "Certified Schools",
    image: "/img/konstruct.jpg",
    large: true,
  },
];

export default function MagicBentoShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;

    if (!section || !spotlight) return;

    const move = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();

      const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      gsap.to(spotlight, {
        left: e.clientX,
        top: e.clientY,
        opacity: inside ? 1 : 0,
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  const createRipple = (e: React.MouseEvent<HTMLDivElement>, element: HTMLDivElement) => {
    const rect = element.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    const ripple = document.createElement("span");

    ripple.style.width = `${size}px`;

    ripple.style.height = `${size}px`;

    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;

    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    ripple.className = "absolute rounded-full bg-indigo-500/30 scale-0 pointer-events-none";

    element.appendChild(ripple);

    gsap.to(ripple, {
      scale: 2,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => ripple.remove(),
    });
  };

  return (
    <section
    id="servicios"
      ref={sectionRef}
      className="
      relative
      w-full
      min-h-screen bg-linear-to-b from-[#1a265b]
      to-[#050816]
      overflow-hidden
      py-40
      px-6
      "
    >
      <div
        ref={spotlightRef}
        className="
        fixed
        pointer-events-none
        w-[650px]
        h-[650px]
        rounded-full
        opacity-0
        -translate-x-1/2
        -translate-y-1/2
        z-0
        "
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,.18) 0%, rgba(99,102,241,.08) 25%, transparent 70%)",
        }}
      />
      <div className="flex flex-col gap-2 mb-18 justiy-center text-center">
        <h2 className="mt-4 text-3xl md:text-5xl font-bold">Nuestros Servicios</h2>

        <p className="mt-4 text-slate-400 text-lg">Ofrecemos soluciones integrales en gestión de riesgos, seguridad y desarrollo organizacional para fortalecer la competitividad y sostenibilidad.</p>
      </div>

      <div
        className="
        relative
        z-10
        max-w-[1400px]
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={(e) => createRipple(e, e.currentTarget)}
            className={`

            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-indigo-500/20
            bg-white/[0.03]
            backdrop-blur-xl
            cursor-pointer
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-indigo-500/50
            hover:shadow-[0_0_60px_rgba(99,102,241,.35)]

            ${card.large ? "xl:col-span-2 min-h-[420px]" : "min-h-[320px]"}

            `}
          >
            <div
              className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              "
              style={{
                background: "radial-gradient(circle at center, rgba(99,102,241,.15), transparent 70%)",
              }}
            />

            <Image
              src={card.image}
              fill
              alt=""
              className="
              object-cover
              transition
              duration-700
              group-hover:scale-110
              "
            />

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/20
              to-transparent
              "
            />

            <div
              className="
              absolute
              bottom-0
              left-0
              p-8
              z-20
              "
            >
              <p
                className="
                text-indigo-400
                text-sm
                uppercase
                tracking-[4px]
                mb-2
                "
              >
                {card.subtitle}
              </p>

              <h3
                className="
                text-white
                text-3xl
                font-semibold
                "
              >
                {card.title}
              </h3>
            </div>

            <div
              className="
              absolute
              inset-0
              rounded-[32px]
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              pointer-events-none
              "
              style={{
                boxShadow: "inset 0 0 0 1px rgba(99,102,241,.45),0 0 60px rgba(99,102,241,.25)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
