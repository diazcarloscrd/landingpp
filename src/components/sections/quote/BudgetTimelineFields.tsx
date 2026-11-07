import React from "react";
import { BUDGET_OPTIONS, TIMELINE_OPTIONS } from "@/config/quote-options";
import { QuoteFormData } from "@/types/quote";

interface BudgetTimelineFieldsProps {
  budgetRange: string;
  timeline: string;
  onChange: (field: keyof QuoteFormData, val: string) => void;
}

export const BudgetTimelineFields: React.FC<BudgetTimelineFieldsProps> = ({
  budgetRange,
  timeline,
  onChange,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
      {/* Rango de Presupuesto Estimado */}
      <div className="space-y-1">
        <label htmlFor="quote-budget" className="block text-xs text-slate-300">
          Presupuesto Estimado (orientativo)
        </label>
        <select
          id="quote-budget"
          value={budgetRange}
          onChange={(e) => onChange("budgetRange", e.target.value)}
          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all cursor-pointer"
        >
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt.id} value={opt.id} className="bg-[#0b0d22] text-white">
              {opt.label}
            </option>
          ))}
        </select>
        <span className="text-[10px] text-slate-400">Podés dejarlo abierto a propuesta técnica.</span>
      </div>

      {/* Plazo Deseado */}
      <div className="space-y-1">
        <label htmlFor="quote-timeline" className="block text-xs text-slate-300">
          Plazo Deseado para Comenzar
        </label>
        <select
          id="quote-timeline"
          value={timeline}
          onChange={(e) => onChange("timeline", e.target.value)}
          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all cursor-pointer"
        >
          {TIMELINE_OPTIONS.map((opt) => (
            <option key={opt.id} value={opt.id} className="bg-[#0b0d22] text-white">
              {opt.label}
            </option>
          ))}
        </select>
        <span className="text-[10px] text-slate-400">Coordinamos etapas según tu urgencia real.</span>
      </div>
    </div>
  );
};
