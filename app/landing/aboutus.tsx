"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

export default function AboutUsTCP() {
  return (
    <section id="aboutus" className="relative w-full min-h-[900px] flex items-center bg-slate-800 text-white overflow-hidden py-40">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
        {/* LEFT - TEXT */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}>
          <p className="text-indigo-400 text-sm tracking-wides text-nowrap uppercase">Quiénes somos</p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">Team Consulting Perú S.A. (TCP)</h2>

          <p className="mt-6 text-slate-300 leading-relaxed text-lg">
            Es una empresa consultora peruana especializada en la gestión integral de riesgos, cuyo enfoque basado en estándares nacionales e internacionales permite a las organizaciones alcanzar las mejores prácticas mundiales (MPM) y fortalecer la cultura de seguridad.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">TCP provee a sus clientes servicios y productos de calidad a través de un enfoque estructurado, integrado y sistematizado, orientado a la mejora continua, la sostenibilidad y la excelencia operacional.</p>

          {/* Highlight points */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">✔ Estándares internacionales</div>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">✔ Cultura de seguridad</div>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">✔ Gestión integrada de riesgos</div>
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">✔ Mejores prácticas mundiales</div>
          </div>
        </motion.div>

        {/* RIGHT - MEDIA */}
        <div className="relative space-y-8">
          {/* IMAGE CARD */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <Image src="/img/team.jpg" width={200} height={320} alt="Equipo consultoría TCP" className="w-full h-[260px] object-cover" />
          </motion.div>

         <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <Image src="/img/personal.jpg" width={200} height={300} alt="Equipo consultoría TCP" className="w-full h-[320px] object-cover" />
          </motion.div>

          {/* floating accent */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-10 -right-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl px-8 py-3 text-xl text-indigo-200 backdrop-blur">
            Enfoque basado en estándares globales
          </motion.div>
        </div>
      </div>
    </section>
  );
}
