"use client";

import React, { useState } from "react";
import { TrendingUp, Users, CheckCircle2 } from "lucide-react";

export const CrmDemo: React.FC = () => {
  const [crmPeriod, setCrmPeriod] = useState<"semana" | "mes" | "año">("mes");

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Resumen Operativo
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-medium">
            Demo con datos ficticios
          </span>
        </div>
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 text-xs">
          {(["semana", "mes", "año"] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setCrmPeriod(p)}
              className={`px-2.5 py-1 rounded-md capitalize transition-colors ${
                crmPeriod === p
                  ? "bg-violet-600 text-white font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Ingresos Registrados</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-white">
            {crmPeriod === "semana"
              ? "$1.850.000"
              : crmPeriod === "mes"
              ? "$7.420.000"
              : "$84.900.000"}
          </p>
          <span className="text-[11px] text-emerald-400">+24% vs periodo anterior</span>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Presupuestos Activos</span>
            <Users className="w-4 h-4 text-violet-400" />
          </div>
          <p className="text-2xl font-bold text-white">
            {crmPeriod === "semana" ? "14" : crmPeriod === "mes" ? "48" : "520"}
          </p>
          <span className="text-[11px] text-violet-300">8 pendientes de aprobación</span>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span>Órdenes Entregadas</span>
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-2xl font-bold text-white">
            {crmPeriod === "semana" ? "9" : crmPeriod === "mes" ? "36" : "412"}
          </p>
          <span className="text-[11px] text-cyan-300">98% cumplimiento a tiempo</span>
        </div>
      </div>

      <div className="rounded-xl bg-black/30 border border-white/5 p-3.5 space-y-2">
        <p className="text-xs font-semibold text-slate-300">Últimos Movimientos del Pipeline (Simulación)</p>
        {[
          { client: "Constructora Modelo (Ejemplo)", task: "Presupuesto Obra #408", status: "Aprobado", color: "text-emerald-400 bg-emerald-500/10" },
          { client: "Distribuidora Demo", task: "Reposición Stock Mensual", status: "En curso", color: "text-amber-300 bg-amber-500/10" },
          { client: "Estudio Profesional Ficticio", task: "Abono Mantenimiento", status: "Cobrado", color: "text-violet-300 bg-violet-500/10" },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between text-xs py-1.5 border-b border-white/5 last:border-0">
            <div>
              <span className="font-medium text-white">{row.client}</span>
              <span className="text-slate-400 ml-2 hidden sm:inline">• {row.task}</span>
            </div>
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${row.color}`}>
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
