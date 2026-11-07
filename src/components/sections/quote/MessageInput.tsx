import React from "react";
import { ServiceType } from "@/types/quote";
import { SUGGESTIONS_BY_SERVICE } from "@/config/quote-options";
import { Lightbulb, Plus } from "lucide-react";

interface MessageInputProps {
  serviceType: ServiceType;
  value: string;
  onChange: (val: string) => void;
  onApplySuggestion: (text: string) => void;
  error?: string;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  serviceType,
  value,
  onChange,
  onApplySuggestion,
  error,
}) => {
  const suggestions = SUGGESTIONS_BY_SERVICE[serviceType] || [];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label htmlFor="quote-message" className="block text-xs sm:text-sm font-semibold text-slate-200">
          2. Contanos tu Objetivo o Necesidad <span className="text-violet-400">*</span>
        </label>
        <span className="text-[11px] text-slate-400">
          {value.length}/3000 car.
        </span>
      </div>

      <textarea
        id="quote-message"
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ej: Necesitamos automatizar la carga de presupuestos y seguimiento de obras para un equipo de 8 personas, conectándolo con alertas por WhatsApp..."
        className={`w-full p-3.5 rounded-xl bg-black/40 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all ${
          error ? "border-rose-500/80" : "border-white/10"
        }`}
      />

      {error && <p className="text-xs text-rose-400">{error}</p>}

      {/* Ideas rápidas según el servicio elegido */}
      {suggestions.length > 0 && (
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-violet-300 font-medium">
            <Lightbulb className="w-3.5 h-3.5 text-violet-400 shrink-0" />
            <span>Sugerencias rápidas para este servicio (hacé clic para sumar al texto):</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {suggestions.map((sug, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onApplySuggestion(sug.template)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-violet-600/15 hover:bg-violet-600/30 border border-violet-500/20 text-[11px] text-violet-200 hover:text-white transition-all text-left"
              >
                <Plus className="w-3 h-3 text-violet-400 shrink-0" />
                <span>{sug.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
