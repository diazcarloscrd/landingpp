"use client";

import React, { useState } from "react";

export const CotizadorDemo: React.FC = () => {
  const [calcMeters, setCalcMeters] = useState(45);
  const [calcPremium, setCalcPremium] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
          Simulador de Presupuesto en Vivo
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-medium">
          Demo con datos ficticios
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-300">Medida o Dimensión:</span>
            <span className="text-xs font-bold text-white bg-amber-500/20 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
              {calcMeters} m² / unidades
            </span>
          </div>

          <div className="space-y-2.5">
            <div className="grid grid-cols-4 gap-2">
              {[20, 45, 80, 120].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setCalcMeters(val)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                    calcMeters === val
                      ? "bg-violet-600 text-white border-violet-400 shadow-glow-sm"
                      : "bg-black/40 text-slate-300 border-white/10 hover:border-violet-500/40"
                  }`}
                >
                  {val} m²
                </button>
              ))}
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, (calcMeters / 120) * 100)}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xs text-slate-300">Incluir Servicio Premium:</span>
            <button
              type="button"
              onClick={() => setCalcPremium(!calcPremium)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                calcPremium
                  ? "bg-violet-600 text-white border-violet-400"
                  : "bg-black/40 text-slate-400 border-white/10"
              }`}
            >
              {calcPremium ? "Sí, Incluido" : "Estándar"}
            </button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-violet-950/40 to-indigo-950/30 border border-violet-500/30 space-y-2">
          <p className="text-xs text-violet-300 font-semibold uppercase">
            Estimación en Tiempo Real
          </p>
          <p className="text-2xl sm:text-3xl font-extrabold text-white">
            ${(calcMeters * (calcPremium ? 18500 : 12000)).toLocaleString("es-AR")}
            <span className="text-xs font-normal text-slate-400 ml-1">estimado</span>
          </p>
          <p className="text-xs text-slate-300 leading-relaxed">
            Adaptamos este cotizador a tus fórmulas exactas de precios (fábricas, aberturas, imprentas, construcción o servicios) para que tus clientes lleguen informados y listos para contratar.
          </p>
        </div>
      </div>
    </div>
  );
};
