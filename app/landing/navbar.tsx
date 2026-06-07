// components/layout/navbar.tsx

"use client";

import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Navbar() {
  const items = [
    { label: "Inicio", link: "#" },
    { label: "¿Quiénes somos?", link: "#aboutus" },
    { label: "Estratégias", link: "#estrategias" },
    { label: "Servicios", link: "#servicios" },
    { label: "FAQ", link: "#faq" },
    { label: "Contacto", link: "#contacto" },
  ];

  const socialItems = [
    {
      label: "Facebook",
      link: "https://facebook.com",
    },
    {
      label: "Instagram",
      link: "https://instagram.com",
    },
    {
      label: "WhatsApp",
      link: "https://wa.me/51999999999",
    },
  ];

  const [open, setOpen] = useState(false);

  const openRef = useRef(false);
  const navbarRef = useRef<HTMLElement | null>(null);
const lastScrollY = useRef(0);
const isHiddenRef = useRef(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const textInnerRef = useRef<HTMLSpanElement | null>(null);

  const hRef = useRef<HTMLSpanElement | null>(null);
  const vRef = useRef<HTMLSpanElement | null>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [textLines, setTextLines] = useState(["Menu", "Close"]);

  useLayoutEffect(() => {
    gsap.set(panelRef.current, {
      xPercent: 120,
    });

    gsap.set(layerRef.current, {
      xPercent: 120,
    });

    gsap.set(overlayRef.current, {
      opacity: 0,
      pointerEvents: "none",
    });

    gsap.set(contentRef.current, {
      opacity: 0,
      x: 30,
      pointerEvents: "none",
    });

    gsap.set(textInnerRef.current, {
      yPercent: 0,
    });
  }, []);

  const animateText = (isOpen: boolean) => {
    const inner = textInnerRef.current;

    if (!inner) return;

    const from = isOpen ? "Menu" : "Close";
    const to = isOpen ? "Close" : "Menu";

    setTextLines([from, "Menu", "Close", to]);

    gsap.killTweensOf(inner);

    gsap.set(inner, {
      yPercent: 0,
    });

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
      gsap.to(h, {
        rotate: 45,
        duration: 0.8,
        ease: "power4.out",
      });

      gsap.to(v, {
        rotate: -45,
        duration: 0.8,
        ease: "power4.out",
      });
    } else {
      gsap.to(h, {
        rotate: 0,
        duration: 0.7,
      });

      gsap.to(v, {
        rotate: 90,
        duration: 0.7,
      });
    }
  };

  const animatePanels = (isOpen: boolean) => {
    const panel = panelRef.current;
    const layer = layerRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!panel || !layer || !overlay || !content) return;

    tlRef.current?.kill();

    const tl = gsap.timeline();

    if (isOpen) {
      tl.to(overlay, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.4,
      })
        .to(
          layer,
          {
            xPercent: 0,
            duration: 1,
            ease: "power4.out",
          },
          0,
        )
        .to(
          panel,
          {
            xPercent: 0,
            duration: 1.15,
            ease: "power4.out",
          },
          0.15,
        )
        .to(
          content,
          {
            opacity: 1,
            x: 0,
            pointerEvents: "auto",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25",
        );
    } else {
      tl.to(content, {
        opacity: 0,
        x: 30,
        duration: 0.25,
        pointerEvents: "none",
      })
        .to(
          panel,
          {
            xPercent: 120,
            duration: 0.85,
            ease: "power3.in",
          },
          0,
        )
        .to(
          layer,
          {
            xPercent: 120,
            duration: 1,
            ease: "power3.in",
          },
          0.15,
        )
        .to(
          overlay,
          {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.3,
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
    if (next) {
  gsap.to(navbarRef.current, {
    y: 0,
    duration: 0.4,
    ease: "power3.out",
  });

  isHiddenRef.current = false;
}

    animatePanels(next);
    animateIcon(next);
    animateText(next);
  }, []);

  useLayoutEffect(() => {
    if (!open) {
      const inner = textInnerRef.current;

      if (!inner) return;

      gsap.killTweensOf(inner);

      gsap.set(inner, {
        yPercent: 0,
      });

      setTextLines(["Menu", "Close"]);
    }
  }, [open]);

  React.useEffect(() => {
  const handleScroll = () => {
    // Nunca ocultar si el menú está abierto
    if (openRef.current) return;

    const currentScrollY = window.scrollY;

    // Siempre visible cerca del top
    if (currentScrollY < 50) {
      if (isHiddenRef.current) {
        gsap.to(navbarRef.current, {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });

        isHiddenRef.current = false;
      }

      lastScrollY.current = currentScrollY;
      return;
    }

    // Scroll hacia abajo → ocultar
    if (
      currentScrollY > lastScrollY.current &&
      !isHiddenRef.current
    ) {
      gsap.to(navbarRef.current, {
        y: "-97%",
        duration: 0.5,
        ease: "power3.out",
      });

      isHiddenRef.current = true;
    }

    // Scroll hacia arriba → mostrar
    if (
      currentScrollY < lastScrollY.current &&
      isHiddenRef.current
    ) {
      gsap.to(navbarRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      isHiddenRef.current = false;
    }

    lastScrollY.current = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
      {/* OVERLAY */}
      <div
        ref={overlayRef}
        onClick={toggle}
        className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
      />

      {/* LAYER */}
      <div
        ref={layerRef}
        className="
          fixed
          top-0
          right-0
          z-[94]
          h-screen
          w-full
          md:w-[420px]
          bg-blue-900
        "
      />

      {/* PANEL */}
      <div
        ref={panelRef}
        className="
          fixed
          top-0
          right-0
          z-[95]
          h-screen
          w-full
          md:w-[420px]
          overflow-hidden
          bg-gradient-to-br
          from-[#05477c]
          via-[#217ac2]
          to-blue-700
        "
      >
        {/* CONTENT */}
        <div
          ref={contentRef}
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            justify-between
            p-10
            text-white
          "
        >
          <div className="md:mt-44 mt-28">
            <p className="mb-8 md:text-lg text-base uppercase tracking-[0.4em] text-white">
              Navegación
            </p>

            <div className="space-y-6">
              {items.map((item, index) => (
                <a
                  key={item.label}
                  href={item.link}
                  onClick={toggle}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    md:text-3xl text-2xl text-nowrap
                    font-semibold
                    transition-all
                    duration-300
                    hover:translate-x-2
                  "
                >
                  <span className="text-sm text-white/50">0{index + 1}</span>

                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/60">
              Redes Sociales
            </p>

            <div className="flex gap-6">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  className="text-white/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header
  ref={navbarRef}
  className="
    fixed
    top-0
    left-0
    z-[100]
    w-full
    bg-[#022039]
    will-change-transform
  "
>
        <div className="mx-auto flex md:h-28 h-20 items-center justify-between px-6 lg:px-10">
         <Image
            src="/img/logo.png"
            alt="Logo"
            width={420}
            height={120}
            className="object-cover md:w-[420px] w-[200px] rounded-full"
          />

          <button
            onClick={toggle}
            className="
              flex
              items-center
              gap-3
              text-white
            "
          >
            <span className="h-[20px] overflow-hidden">
              <span ref={textInnerRef} className="flex flex-col leading-[20px]">
                {textLines.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </span>
            </span>

            <span className="relative h-[18px] w-[18px]">
              <span
                ref={hRef}
                className="absolute top-1/2 h-[2px] w-full bg-white"
              />

              <span
                ref={vRef}
                className="absolute top-1/2 h-[2px] w-full rotate-90 bg-white"
              />
            </span>
          </button>
        </div>
      </header>
    </>
  );
}
