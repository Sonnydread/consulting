"use client";

import React, { useRef, useEffect, useState } from "react";

const GooeyNavDemo = () => {
  const items = [{ label: "Home" }, { label: "About" }, { label: "Projects" }, { label: "Contact" }];

  const animationTime = 600;
  const particleCount = 18;
  const particleDistances: [number, number] = [90, 10];
  const particleR = 100;
  const timeVariance = 300;

  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);

    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i: number, t: number, d: [number, number], r: number) => {
    let rotate = noise(r / 10);

    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.25),
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);

      const p = createParticle(i, t, d, r);

      element.classList.remove("active");

      setTimeout(() => {
        const particle = document.createElement("span");

        const point = document.createElement("span");

        particle.classList.add("particle");

        particle.style.setProperty("--start-x", `${p.start[0]}px`);

        particle.style.setProperty("--start-y", `${p.start[1]}px`);

        particle.style.setProperty("--end-x", `${p.end[0]}px`);

        particle.style.setProperty("--end-y", `${p.end[1]}px`);

        particle.style.setProperty("--time", `${p.time}ms`);

        particle.style.setProperty("--scale", `${p.scale}`);

        particle.style.setProperty("--rotate", `${p.rotate}deg`);

        point.classList.add("point");

        particle.appendChild(point);

        element.appendChild(particle);

        requestAnimationFrame(() => {
          element.classList.add("active");
        });

        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {}
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };

    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);

    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();

    const liEl = e.currentTarget;

    if (activeIndex === index) return;

    setActiveIndex(index);

    updateEffectPosition(liEl);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");

      particles.forEach((p) => filterRef.current?.removeChild(p));
    }

    if (textRef.current) {
      textRef.current.classList.remove("active");

      void textRef.current.offsetWidth;

      textRef.current.classList.add("active");
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;

    const activeLi = navRef.current.querySelectorAll("li")[activeIndex] as HTMLElement;

    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[activeIndex] as HTMLElement;

      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      <style>
        {`
          .gooey-nav{
            position:relative;
          }

          .effect{
            position:absolute;
            opacity:1;
            pointer-events:none;
            display:grid;
            place-items:center;
            z-index:1;
          }

          .effect.text{
            color:black;
            transition:color .3s ease;
            font-weight:600;
          }

         .effect.filter{
  filter: blur(0px) contrast(100);
  mix-blend-mode: lighten;
}
          .effect.filter::after{
            content:"";
            position:absolute;
            inset:0;
            background:white;
            border-radius:9999px;
            transform:scale(0);
            opacity:0;
          }

          .effect.active::after{
            animation:pill .3s ease both;
          }

         @keyframes pill{
  0%{
    transform: scale(0.2);
    opacity: 0;
  }
  100%{
    transform: scale(1);
    opacity: 0.2;
  }
}

         .particle,
.point{
  display:block;
  opacity:0;
  transform-origin:center;

  width:20px;
  height:20px;

  border-radius:9999px;
  background: rgba(255,255,255,0.95);

  box-shadow: 0 0 6px rgba(255,255,255,0.25);
}

          .particle{
            --time:0.04s;
            position:absolute;
            top:calc(40% - 6px);
            left:calc(50% - 8px);

            animation:
              particle calc(var(--time))
              ease
              1
              -180ms;
          }

        .point{
  background: #fff;
  width: 20px;
  height: 20px;
  border-radius: 2xl;

  opacity: 0.02;


  animation: point calc(var(--time)) linear 1 -350ms;
}
         @keyframes particle{
  0%{
    transform:
      rotate(0deg)
      translate(
        calc(var(--start-x) * 2.80),
        calc(var(--start-y) * 0.90)
      );

    opacity:2;
    animation-timing-function: cubic-bezier(.95,3,7,.85);
  }

  70%{
    transform:
      rotate(calc(var(--rotate) * .5))
      translate(
        calc(var(--end-x) * 0.15),
        calc(var(--end-y) * 0.15)
      );

    opacity:1;
    animation-timing-function:ease;
  }

  100%{
    transform:
      rotate(calc(var(--rotate) * 1.2))
      translate(
        calc(var(--end-x) * 0.25),
        calc(var(--end-y) * 0.25)
      );

    opacity:0;
  }
}

          @keyframes point{
            0%{
              transform:scale(0);
              opacity:0;
            }

            95%{
              opacity:1;
            }

            5%{
              transform:scale(var(--scale));
              opacity:1;
            }

            100%{
              transform:scale(0);
              opacity:0;
            }
          }

          li.active{
            color:black;
          }

          li::after{
            content:"";
            position:absolute;
            inset:0;
            border-radius:9999px;
            background:white;
            opacity:0;
            transform:scale(0);
            transition:all .3s ease;
            z-index:-1;
          }

          li.active::after{
            opacity:1;
            transform:scale(1);
          }

          .nav-btn{
            border:none;
            outline:none;
            background:transparent;
            cursor:pointer;
            color:white;
            font-weight:500;
            padding:.85em 1.5em;
            border-radius:9999px;
            position:relative;
            z-index:2;
          }
        `}
      </style>

      <div ref={containerRef} className="relative bg-black flex justify-center items-center py-10">
        <nav
          className="gooey-nav"
          style={{
            transform: "translate3d(0,0,0.01px)",
          }}>
          <ul ref={navRef} className="flex gap-4 list-none p-0 m-0 relative z-[3]">
            {items.map((item, index) => (
              <li key={index} className={`rounded-full relative transition-all duration-300 ${activeIndex === index ? "active" : ""}`}>
                <button onClick={(e) => handleClick(e, index)} className="nav-btn">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <span className="effect filter" ref={filterRef} />

        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNavDemo;
