"use client";

import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

export default function HeroConsultoria() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-gradient-to-b from-[#1a265b] via-slate-900 to-[#1a265b] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-700/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm text-indigo-300 mb-4">
            <ShieldCheck size={18} />
            Gestión Estratégica de Seguridad & Riesgos
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Elevamos los estándares de desempeño
            <span className="text-indigo-400"> en tu organización</span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            Guiamos a las empresas a mejorar la madurez de su cultura de seguridad, minimizando lesiones y pérdidas mediante un enfoque estratégico de Gestión de Riesgos con Utilidades, impactando positivamente en la competitividad, la calidad de vida y la sostenibilidad del negocio.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition flex items-center justify-center gap-2 font-medium">
              Solicitar diagnóstico
              <ArrowRight size={18} />
            </button>

            <button className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 transition text-slate-200">Conocer metodología</button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-indigo-400">+15</p>
              <p className="text-xs text-slate-400">Años de experiencia</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-400">+200</p>
              <p className="text-xs text-slate-400">Empresas asesoradas</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-indigo-400">-40%</p>
              <p className="text-xs text-slate-400">Reducción de incidentes</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl border border-slate-800 bg-slate-500/50 p-8 lg:p-10 min-h-[520px] backdrop-blur-2xl">
            <div className="flex items-center gap-3 mb-10">
              <TrendingUp className="h-14 w-14 text-emerald-400" />
              <h3 className="text-xl font-semibold">Impacto en Seguridad Organizacional</h3>
            </div>

            <div className="space-y-10 text-xl text-slate-300">
              {/* ITEM 1 */}
              <div>
                <div className="mb-3 flex justify-between">
                  <span>Cultura de seguridad</span>
                  <span className="text-emerald-400 font-semibold">+68%</span>
                </div>

                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[68%] h-full bg-emerald-500" />
                </div>
              </div>

              {/* ITEM 2 */}
              <div>
                <div className="mb-3 pt-4 flex justify-between">
                  <span>Reducción de riesgos</span>
                  <span className="text-indigo-400 font-semibold">-52%</span>
                </div>

                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[52%] h-full bg-indigo-500" />
                </div>
              </div>

              {/* ITEM 3 */}
              <div>
                <div className="mb-3 pt-4 flex justify-between">
                  <span>Eficiencia operativa</span>
                  <span className="text-sky-400 font-semibold">+74%</span>
                </div>

                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[74%] h-full bg-sky-500" />
                </div>
              </div>
            </div>
          </div>

          {/* floating card */}
          <div className="absolute -bottom-8 -right-12 bg-slate-900 border border-slate-800 rounded-xl px-6 py-5 text-sm text-slate-300 shadow-xl">
            <p className="text-indigo-500 text-xl font-semibold mb-1">Enfoque estratégico</p>
            <p className="text-base">Gestión de riesgos + valor empresarial</p>
          </div>
        </div>
      </div>
    </section>
  );
}
