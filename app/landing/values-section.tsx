"use client";

import { motion } from "framer-motion";
import { Handshake, Scale, Award, ShieldCheck, Users } from "lucide-react";

const values = [
  {
    icon: Scale,
    title: "Honestidad e Integridad",
    description:
      "Negociamos firmemente con honestidad, integridad y de acuerdo a la ley.",
  },
  {
    icon: Handshake,
    title: "Filosofía Win–Win",
    description:
      "Practicamos permanentemente el principio Ganar – Ganar (Win – Win), buscando relaciones sostenibles.",
  },
  {
    icon: Award,
    title: "Excelencia Profesional",
    description:
      "Desarrollamos profesionalismo para asegurar la excelencia en todo lo que realizamos a través de la mejora continua.",
  },
  {
    icon: ShieldCheck,
    title: "Ética Empresarial",
    description:
      "Mantenemos los más altos estándares de ética en todas nuestras operaciones y decisiones.",
  },
  {
    icon: Users,
    title: "Socios Estratégicos",
    description:
      "Consideramos a nuestros clientes como socios estratégicos clave para lograr la mayor rentabilidad conjunta.",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative w-full py-24 bg-slate-950 text-white overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm tracking-widest uppercase">
            Cultura organizacional
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Nuestros Valores
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Principios que guían nuestra forma de trabajar, relacionarnos y generar impacto
            en cada organización con la que colaboramos.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur hover:border-indigo-500/40 transition"
              >
                {/* icon */}
                <div className="mb-4 w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition">
                  <Icon className="text-indigo-400" />
                </div>

                {/* title */}
                <h3 className="text-lg font-semibold mb-2">
                  {value.title}
                </h3>

                {/* description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>

                {/* glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
              </motion.div>
            );
          })}

        </div>

        {/* footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center text-sm text-slate-500"
        >
          Valores que fortalecen la confianza, sostenibilidad y excelencia operativa
        </motion.div>

      </div>
    </section>
  );
}