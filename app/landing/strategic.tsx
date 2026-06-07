"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Building2,
  Target,
  ArrowRight,
  Award,
  TrendingUp,
} from "lucide-react";

export default function StrategicAllianceSection() {
  return (
    <section id="estrategias" className="relative overflow-hidden rounded-[32px] bg-slate-950 px-8 py-24">
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-20 text-center"
        >
          <span className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium tracking-wide text-cyan-300">
            Strategic Partnership Model
          </span>

          <h2 className="mb-6 text-5xl font-bold text-white">
            Alianza Estratégica para la
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transformación SSMA
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400">
            Integramos experiencia especializada, acompañamiento permanente y
            metodologías internacionales para fortalecer la cultura preventiva,
            optimizar el desempeño organizacional y alcanzar estándares de clase
            mundial.
          </p>
        </motion.div>

        {/* Main Structure */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          {/* TCP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-500/15 p-4">
                <Building2 className="h-8 w-8 text-cyan-300" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-cyan-300">
                  Socio Estratégico
                </p>

                <h3 className="text-3xl font-bold text-white">
                  TCP
                </h3>
              </div>
            </div>

            <div className="space-y-5">
              {[
                "Especialización en gestión SSMA",
                "Presencia mensual en campo",
                "Auditorías y diagnósticos",
                "Informes ejecutivos gerenciales",
                "Acompañamiento permanente",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="flex flex-col items-center"
          >
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-xl">
              <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-500/10" />

              <Users className="h-20 w-20 text-cyan-300" />
            </div>

            <div className="mt-8 text-center">
              <h3 className="mb-3 text-3xl font-bold text-white">
                Transformación
              </h3>

              <p className="max-w-xs text-slate-400">
                Seguridad, Salud Ocupacional,
                Medio Ambiente y
                Responsabilidad Social.
              </p>
            </div>

            <ArrowRight className="mt-8 hidden h-8 w-8 text-cyan-400 lg:block" />
          </motion.div>

          {/* Cliente */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-2xl bg-blue-500/15 p-4">
                <Target className="h-8 w-8 text-blue-300" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-blue-300">
                  Organización
                </p>

                <h3 className="text-3xl font-bold text-white">
                  Cliente
                </h3>
              </div>
            </div>

            <div className="space-y-5">
              {[
                "Personal capacitado",
                "Aprendizaje organizacional",
                "Nueva cultura preventiva",
                "Mayor cumplimiento",
                "Mejora continua",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Award className="h-5 w-5 text-blue-400" />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8, delay: .2 }}
          className="mt-20"
        >
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-center gap-3">
              <TrendingUp className="h-7 w-7 text-cyan-300" />

              <h3 className="text-2xl font-bold text-white">
                Resultados Esperados
              </h3>
            </div>

            <div className="grid gap-6 text-center md:grid-cols-4">
              <div>
                <div className="mb-2 text-4xl font-bold text-cyan-300">
                  +90%
                </div>
                <p className="text-slate-400">
                  Compromiso Organizacional
                </p>
              </div>

              <div>
                <div className="mb-2 text-4xl font-bold text-cyan-300">
                  SSMA
                </div>
                <p className="text-slate-400">
                  Cultura Preventiva
                </p>
              </div>

              <div>
                <div className="mb-2 text-4xl font-bold text-cyan-300">
                  KPI
                </div>
                <p className="text-slate-400">
                  Seguimiento Continuo
                </p>
              </div>

              <div>
                <div className="mb-2 text-4xl font-bold text-cyan-300">
                  6 MPM
                </div>
                <p className="text-slate-400">
                  Camino a Clase Mundial
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}