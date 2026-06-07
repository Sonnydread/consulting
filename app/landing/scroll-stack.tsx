"use client";

import { ReactNode, useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

export default function ScrollStackDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const cards = [
    {
      title: "Card 1",
      desc: "This is the first card in the stack",
      bg: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Card 2",
      desc: "This is the second card in the stack",
      bg: "from-cyan-500 to-sky-700",
    },
    {
      title: "Card 3",
      desc: "This is the third card in the stack",
      bg: "from-purple-500 to-fuchsia-700",
    },
    {
      title: "Card 4",
      desc: "This is the fourth card in the stack",
      bg: "from-emerald-500 to-teal-700",
    },
  ];

  const clamp = (v: number, min: number, max: number) => {
    return Math.max(min, Math.min(max, v));
  };

  const update = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const vh = container.clientHeight;
    const stackStart = vh * 0.2;
    const scaleEnd = vh * 0.1;

    cardsRef.current.forEach((card, index) => {
      const cardTop = card.offsetTop;

      const triggerStart = cardTop - stackStart - index * 40;

      const triggerEnd = cardTop - scaleEnd;

      const progress = clamp((scrollTop - triggerStart) / (triggerEnd - triggerStart), 0, 1);

      const scale = 1 - progress * (1 - (0.88 + index * 0.03));

      const rotation = progress * (index * 1.5);

      const pinStart = cardTop - stackStart - index * 40;

      const pinEnd = container.scrollHeight - vh - 300;

      let translate = 0;

      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translate = scrollTop - cardTop + stackStart + index * 40;
      } else if (scrollTop > pinEnd) {
        translate = pinEnd - cardTop + stackStart + index * 40;
      }

      const blur =
        index <
        cardsRef.current.findIndex((c) => {
          const t = c.offsetTop - stackStart;

          return scrollTop < t;
        }) -
          1
          ? 2 * (index + 1)
          : 0;

      card.style.transform = `translate3d(0,${translate}px,0) scale(${scale}) rotate(${rotation}deg)`;

      card.style.filter = blur ? `blur(${blur}px)` : "none";
    });
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    cardsRef.current = Array.from(container.querySelectorAll(".stack-card")) as HTMLElement[];

    const lenis = new Lenis({
      wrapper: container,
      content: container.querySelector(".stack-inner") as HTMLElement,
      duration: 1.1,
      smoothWheel: true,
      lerp: 0.1,
    });

    lenis.on("scroll", update);

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    update();

    lenisRef.current = lenis;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      lenis.destroy();
    };
  }, [update]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-y-auto overflow-x-visible bg-zinc-950">
      <div className="stack-inner min-h-screen px-4 md:px-10 lg:px-20 pt-[18vh] pb-[45rem]">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className={`stack-card relative my-8 rounded-3xl md:rounded-[40px] bg-gradient-to-r ${card.bg}
p-6 md:p-10 lg:p-14 shadow-2xl min-h-[220px] md:min-h-[320px]
will-change-transform origin-top`}>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">{card.title}</h2>

              <p className="text-white/80 text-base md:text-xl max-w-2xl">{card.desc}</p>
            </div>
          </div>
        ))}

        <div className="h-px w-full" />
      </div>
    </div>
  );
}
