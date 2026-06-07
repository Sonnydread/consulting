"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export default function Hey() {
  return (
    <section className="bg-linear-to-b from-slate-800 to-[#1a265b] p-4 md:px-28 md:py-40">
      <h1 className="text-4xl font-semibold text-white text-center mb-4">Dirección estratégica orientada a resultados</h1>
      <p className="text-center">Nuestro propósito guía cada decisión y cada proyecto, impulsando la gestión integral de riesgos hacia estándares de clase mundial.</p>
      <div className="flex flex-col pt-20 gap-6 md:flex-row">
        {/* card candidates */}
        <Card
          image="/img/mision.jpg"
          alt="Exteriores"
          title="Misión"
          description="Proveer servicios de consultoría dinámicos, proactivos y de inversión efectiva en el campo de la gestión integral de riesgos, brindando el mejor servicio y coadyuvando a alcanzar una producción segura, controlando los riesgos, minimizando la ocurrencia de incidentes y asegurando la sostenibilidad futura."
          bgColor="bg-[#1c6ec0]"
          logoSrc="/img/logopng.png"
          href="/blog"
        />
        {/* card companiies */}
        <Card
          image="/img/vision.jpg"
          alt="Interiores"
          title="Visión"
          description="Ser una empresa consultora líder a nivel nacional e internacional en gestión integral de riesgos, reconocida por su excelencia técnica, innovación metodológica y contribución al desarrollo de organizaciones seguras, sostenibles y altamente competitivas."
          logoSrc="/img/logopng.png"
          bgColor="bg-[#4e5551]"
          href="/experiencia"
        />
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  bgColor: string;
  logoSrc: string;
  href: string;
}

const MotionImage = motion(Image);

const Card = forwardRef<HTMLDivElement, CardProps>(({ title, description, image, alt, bgColor, logoSrc }, ref) => (
  <motion.div
    className={`${bgColor} overflow-hidden rounded-2xl text-white`}
    initial={"initial"}
    whileHover={"hovered"}
    animate={"initial"}
    ref={ref}
    variants={{
      initial: { flexBasis: "140%" },
      hovered: { flexBasis: "150%" },
    }}
  >
    <div className="relative h-[208px] overflow-hidden md:h-[600px]">
      <MotionImage
        src={image}
        fill
        sizes="100vw"
        alt={alt}
        quality={100}
        priority
        className="z-10 object-cover object-center"
        variants={{
          initial: { opacity: 1 },
          hovered: { opacity: 0 },
        }}
      />
      <motion.div
        className="absolute inset-0 z-20 flex flex-col justify-end p-8"
        variants={{
          initial: { opacity: 0 },
          hovered: { opacity: 1 },
        }}
      >
        <Image src={logoSrc} alt="logo" width={260} height={260} className="object-contain mb-10" />

        <h3 className="mb-4 text-4xl leading-[72px] font-black text-white">{title}</h3>
        <motion.p
          className="mb-6 text-lg font-normal"
          variants={{
            initial: { opacity: 0, y: 20 },
            hovered: { opacity: 1, y: 0 },
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
    <div className={`${bgColor} px-4 py-6 md:hidden`}>
      <h3 className="text-lg leading-9 font-medium text-white">{title}</h3>
      <p className="mt-2 max-w-[80%] text-xs leading-6 font-semibold">{description}</p>
    </div>
  </motion.div>
));

Card.displayName = "Card";
