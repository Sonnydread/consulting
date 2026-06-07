"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  BarChart3,
  Users,
  RefreshCw,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Consultoría y asesoría",
    description:
      "En la gestión integral de riesgos con enfoque en seguridad y salud.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditorías",
    description:
      "De base, cumplimiento y especiales en la gestión integral SSMARS.",
  },
  {
    icon: BarChart3,
    title: "Nivel de Seguridad",
    description:
      "Intervención de actitudes y percepciones y determinación del nivel de la cultura de seguridad según escalafón mundial.",
  },
  {
    icon: Users,
    title: "Liderazgo",
    description:
      "Programa de liderazgo valiente y efectivo en la gestión SSMARS.",
  },
  {
    icon: RefreshCw,
    title: "Mejoras",
    description:
      "Reactivación, reforzamiento y mejora de sistemas de gestión SSMARS.",
  },
  {
    icon: Briefcase,
    title: "RRHH",
    description:
      "Proveemos profesionales competentes en la gestión de riesgos a los diferentes sectores del país.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-24 bg-slate-950 text-white overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm tracking-widest uppercase">
            Soluciones estratégicas
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Nuestros Servicios
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en gestión de riesgos, seguridad y
            desarrollo organizacional para fortalecer la competitividad y sostenibilidad.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur hover:border-indigo-500/40 transition"
              >
                {/* number */}
                <div className="text-xs text-indigo-400 mb-3">
                  0{index + 1}
                </div>

                {/* icon */}
                <div className="mb-4 w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition">
                  <Icon className="text-indigo-400" />
                </div>

                {/* title */}
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                {/* description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
              </motion.div>
            );
          })}

        </div>

        {/* footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center text-sm text-slate-500"
        >
          Soluciones diseñadas para elevar estándares de seguridad y desempeño organizacional
        </motion.div>

      </div>
    </section>
  );
}