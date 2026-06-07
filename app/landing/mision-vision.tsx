"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative w-full py-24 bg-slate-950 text-white overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-120px] w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-indigo-400 text-sm tracking-widest uppercase">
            Dirección estratégica
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Misión y Visión
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Nuestro propósito guía cada decisión y cada proyecto, impulsando la gestión
            integral de riesgos hacia estándares de clase mundial.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-indigo-400" />
              <h3 className="text-xl font-semibold">Misión</h3>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Proveer servicios de consultoría dinámicos, proactivos y de inversión efectiva
              en el campo de la gestión integral de riesgos, brindando el mejor servicio y
              coadyuvando a alcanzar una producción segura, controlando los riesgos,
              minimizando la ocurrencia de incidentes y asegurando la sostenibilidad futura.
            </p>

            {/* accent line */}
            <div className="mt-6 h-[2px] w-20 bg-indigo-500/60 rounded-full" />
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-emerald-400" />
              <h3 className="text-xl font-semibold">Visión</h3>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Ser una empresa consultora líder a nivel nacional e internacional en gestión
              integral de riesgos, reconocida por su excelencia técnica, innovación
              metodológica y contribución al desarrollo de organizaciones seguras,
              sostenibles y altamente competitivas.
            </p>

            {/* accent line */}
            <div className="mt-6 h-[2px] w-20 bg-emerald-500/60 rounded-full" />
          </motion.div>

        </div>

        {/* bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 text-center text-sm text-slate-500"
        >
          Gestión estratégica orientada a la excelencia operativa y sostenibilidad empresarial
        </motion.div>

      </div>
    </section>
  );
}