"use client";

import React, { useState } from "react";

export const RedisenoDemo: React.FC = () => {
  const [speedMode, setSpeedMode] = useState<"after" | "before">("after");

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Comparativa Antes vs Después
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-medium">
            Demo con datos ficticios
          </span>
        </div>
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setSpeedMode("before")}
            className={`px-3 py-1 rounded-md transition-colors ${
              speedMode === "before"
                ? "bg-rose-600 text-white font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Sitio Antiguo (Lento)
          </button>
          <button
            type="button"
            onClick={() => setSpeedMode("after")}
            className={`px-3 py-1 rounded-md transition-colors ${
              speedMode === "after"
                ? "bg-emerald-600 text-white font-semibold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Rediseño CDByte (0.5s)
          </button>
        </div>
      </div>

      {speedMode === "before" ? (
        <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-rose-300">Velocidad de Carga</p>
            <p className="text-2xl font-bold text-rose-400">5.4 seg (Lenta)</p>
            <p className="text-[11px] text-slate-400 mt-1">El 60% de visitas abandona antes de ver el contenido</p>
          </div>
          <div>
            <p className="text-xs text-rose-300">Experiencia en Celular</p>
            <p className="text-2xl font-bold text-rose-400">Desadaptada</p>
            <p className="text-[11px] text-slate-400 mt-1">Textos chicos, imágenes desbordadas y botones difíciles de tocar</p>
          </div>
          <div>
            <p className="text-xs text-rose-300">Captación de Prospectos</p>
            <p className="text-2xl font-bold text-rose-400">Baja Conversión</p>
            <p className="text-[11px] text-slate-400 mt-1">Formulario complejo sin avisos ni conexión directa a WhatsApp</p>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-emerald-300">Velocidad Next.js</p>
            <p className="text-2xl font-bold text-emerald-400">0.5 seg (99/100)</p>
            <p className="text-[11px] text-slate-300 mt-1">Carga instantánea en redes 4G y WiFi</p>
          </div>
          <div>
            <p className="text-xs text-emerald-300">Diseño Mobile-First</p>
            <p className="text-2xl font-bold text-emerald-400">100% Fluido</p>
            <p className="text-[11px] text-slate-300 mt-1">Navegación cómoda y optimizada desde cualquier teléfono</p>
          </div>
          <div>
            <p className="text-xs text-emerald-300">Conversión Activa</p>
            <p className="text-2xl font-bold text-emerald-400">+Consultas Reales</p>
            <p className="text-[11px] text-slate-300 mt-1">Integración con WhatsApp y registro seguro en base de datos</p>
          </div>
        </div>
      )}
    </div>
  );
};
