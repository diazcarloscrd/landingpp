import React from "react";
import { ServiceType } from "@/types/quote";
import {
  Layers,
  ShoppingBag,
  Globe,
  Calendar,
  Calculator,
  Zap,
  HelpCircle,
} from "lucide-react";

interface ServiceSelectorProps {
  value: ServiceType;
  onChange: (service: ServiceType) => void;
  error?: string;
}

const SERVICE_BUTTONS: { id: ServiceType; label: string; icon: React.ElementType }[] = [
  { id: "crm", label: "CRM & Gestión", icon: Layers },
  { id: "ecommerce", label: "Tienda Online", icon: ShoppingBag },
  { id: "landing", label: "Landing Page", icon: Globe },
  { id: "turnos", label: "Sistema de Turnos", icon: Calendar },
  { id: "cotizador", label: "Cotizador Web", icon: Calculator },
  { id: "rediseno", label: "Rediseño Express", icon: Zap },
  { id: "other", label: "Otro / No estoy seguro", icon: HelpCircle },
];

export const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  value,
  onChange,
  error,
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-xs sm:text-sm font-semibold text-slate-200">
        1. Servicio Principal de Interés <span className="text-violet-400">*</span>
      </label>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {SERVICE_BUTTONS.map((item) => {
          const Icon = item.icon;
          const isSelected = value === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                isSelected
                  ? "bg-violet-600 text-white border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-violet-500/30 hover:bg-white/[0.06]"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </div>

      {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
    </div>
  );
};
