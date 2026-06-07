"use client";

import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const StaggeredMenuUnified = () => {
  const items = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Contact", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  const contentRef = useRef<HTMLDivElement | null>(null);

  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const hRef = useRef<HTMLSpanElement | null>(null);
  const vRef = useRef<HTMLSpanElement | null>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [textLines, setTextLines] = useState(["Menu", "Close"]);

  useLayoutEffect(() => {
    gsap.set(panelRef.current, { xPercent: 120 });
    gsap.set(layerRef.current, { xPercent: 120 });

    gsap.set(contentRef.current, {
      opacity: 0,
      pointerEvents: "none",
      x: 20,
    });

    gsap.set(textInnerRef.current, { yPercent: 0 });
  }, []);

  const animateText = (isOpen: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;

    const from = isOpen ? "Menu" : "Close";
    const to = isOpen ? "Close" : "Menu";

    setTextLines([from, "Menu", "Close", to]);

    gsap.killTweensOf(inner);
    gsap.set(inner, { yPercent: 0 });

    gsap.to(inner, {
      yPercent: -75,
      duration: 1.1,
      ease: "power4.inOut",
    });
  };

  const animateIcon = (isOpen: boolean) => {
    const h = hRef.current;
    const v = vRef.current;
    if (!h || !v) return;

    gsap.killTweensOf([h, v]);

    if (isOpen) {
      gsap.to(h, { rotate: 45, duration: 0.8 });
      gsap.to(v, { rotate: -45, duration: 0.8 });
    } else {
      gsap.to(h, { rotate: 0, duration: 0.7 });
      gsap.to(v, { rotate: 90, duration: 0.7 });
    }
  };

  const animatePanels = (isOpen: boolean) => {
    const panel = panelRef.current;
    const layer = layerRef.current;
    const content = contentRef.current;
    if (!panel || !layer || !content) return;

    tlRef.current?.kill();

    const tl = gsap.timeline();

    if (isOpen) {
      tl.to(layer, {
        xPercent: 0,
        duration: 1.1,
        ease: "power4.out",
      })
        .to(
          panel,
          {
            xPercent: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.7",
        )
        // 👇 contenido SOLO aparece al final
        .to(
          content,
          {
            opacity: 1,
            x: 0,
            pointerEvents: "auto",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        );
    } else {
      tl.to(content, {
        opacity: 0,
        x: 20,
        pointerEvents: "none",
        duration: 0.25,
      })
        .to(panel, {
          xPercent: 120,
          duration: 0.9,
          ease: "power3.in",
        })
        .to(
          layer,
          {
            xPercent: 120,
            duration: 1.0,
            ease: "power3.in",
          },
          "-=0.6",
        );
    }

    tlRef.current = tl;
  };

  const toggle = useCallback(() => {
    const next = !openRef.current;
    openRef.current = next;
    setOpen(next);

    animatePanels(next);
    animateIcon(next);
    animateText(next);
  }, []);

  // 🔥 FIX CRÍTICO: reset total al cerrar
  const resetUI = () => {
    const inner = textInnerRef.current;
    if (!inner) return;

    if (!openRef.current) {
      gsap.killTweensOf(inner);
      gsap.set(inner, { yPercent: 0 });
      setTextLines(["Menu", "Close"]);
    }
  };

  useLayoutEffect(() => {
    if (!open) resetUI();
  }, [open]);

  return (
    <div className="relative w-full h-screen bg-[#0b0b10] overflow-hidden">
      {/* BACK LAYERS */}
      <div ref={layerRef} className="absolute top-0 right-0 w-[420px] h-full bg-[#111827]" />
      <div ref={panelRef} className="absolute top-0 right-0 w-[420px] h-full bg-indigo-700" />

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full flex justify-between p-8 text-white z-50">
        <div className="font-bold">LOGO</div>

        <button onClick={toggle} className="flex items-center gap-3">
          <span className="h-[20px] overflow-hidden">
            <span ref={textInnerRef} className="flex flex-col leading-[20px]">
              {textLines.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </span>
          </span>

          <span className="relative w-[18px] h-[18px]">
            <span ref={hRef} className="absolute w-full h-[2px] bg-white top-1/2" />
            <span ref={vRef} className="absolute w-full h-[2px] bg-white top-1/2 rotate-90" />
          </span>
        </button>
      </div>

      {/* CONTENT (IMPORTANTE: ahora oculto correctamente) */}
      <div ref={contentRef} className="absolute right-0 top-0 w-[420px] h-full z-40 text-white p-10 flex flex-col justify-between">
        <div className="mt-32 space-y-8">
          {items.map((it, i) => (
            <a key={i} href={it.link} className="block text-5xl font-semibold hover:opacity-60">
              {it.label}
            </a>
          ))}
        </div>

        <div className="flex gap-6 text-sm opacity-80">
          {socialItems.map((s, i) => (
            <a key={i} href={s.link}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaggeredMenuUnified;
