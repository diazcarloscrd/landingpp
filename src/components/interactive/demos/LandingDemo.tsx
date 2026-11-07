"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export const LandingDemo: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
          Estructura de Alta Conversión (CRO)
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-medium">
          Demo con datos ficticios
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className="md:col-span-3 space-y-3 p-4 rounded-xl bg-gradient-to-br from-slate-900 via-[#0e122e] to-violet-950/40 border border-white/10">
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-semibold">
            Optimización Mobile-First
          </span>
          <h4 className="text-lg sm:text-xl font-extrabold text-white leading-snug font-display">
            Transformá Visitas en Google y Redes en Consultas Comerciales
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ideal para profesionales, estudios jurídicos/contables, constructoras y empresas de servicios que necesitan proyectar máxima autoridad sin rodeos.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <p className="font-bold text-emerald-400">&lt; 0.8 seg</p>
              <p className="text-[11px] text-slate-400">Tiempo de carga promedio</p>
            </div>
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
              <p className="font-bold text-violet-300">100% Móvil</p>
              <p className="text-[11px] text-slate-400">Diseño táctil adaptable</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5">
          <p className="text-xs font-bold text-white uppercase tracking-wider">
            Secciones Clave de Conversión:
          </p>
          {[
            "Hero con propuesta de valor y beneficio",
            "Presentación clara de servicios y alcances",
            "Muestras de trabajo / demos interactivas",
            "Preguntas frecuentes para resolver objeciones",
            "Formulario conectado a base de datos segura",
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
