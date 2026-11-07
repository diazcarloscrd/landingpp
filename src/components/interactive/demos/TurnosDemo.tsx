"use client";

import React, { useState } from "react";
import { Clock } from "lucide-react";

export const TurnosDemo: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState("Jue 14");
  const [selectedSlot, setSelectedSlot] = useState("16:30 hs");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
          Simulador de Agendamiento Online
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-medium">
          Demo con datos ficticios
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            1. Seleccioná el Día (Interactivo)
          </p>
          <div className="grid grid-cols-4 gap-2">
            {["Lun 11", "Mar 12", "Mié 13", "Jue 14"].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setSelectedDay(d)}
                className={`py-2 px-2 rounded-lg text-xs font-semibold border transition-all ${
                  selectedDay === d
                    ? "bg-emerald-600 text-white border-emerald-400"
                    : "bg-black/40 text-slate-300 border-white/10 hover:border-white/30"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider pt-1">
            2. Horarios Disponibles
          </p>
          <div className="grid grid-cols-3 gap-2">
            {["09:30 hs", "11:00 hs", "15:00 hs", "16:30 hs", "18:00 hs", "19:15 hs"].map(
              (slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-medium border transition-all ${
                    selectedSlot === slot
                      ? "bg-violet-600 text-white border-violet-400"
                      : "bg-black/40 text-slate-300 border-white/10 hover:border-white/30"
                  }`}
                >
                  {slot}
                </button>
              )
            )}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-3">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 mb-2">
              <Clock className="w-4 h-4" />
              Vista Previa de Reserva
            </span>
            <p className="text-base font-bold text-white">
              Turno Seleccionado: {selectedDay} a las {selectedSlot}
            </p>
            <p className="text-xs text-slate-300 mt-1">
              El sistema bloquea el horario automáticamente, envía recordatorio por WhatsApp al cliente y previene turnos perdidos.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs text-slate-300 flex items-center justify-between">
            <span>Seña previa con Mercado Pago:</span>
            <span className="text-emerald-400 font-bold">Configurable</span>
          </div>
        </div>
      </div>
    </div>
  );
};
