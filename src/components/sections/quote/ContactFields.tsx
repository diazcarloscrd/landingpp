import React from "react";
import { QuoteFormData } from "@/types/quote";

interface ContactFieldsProps {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  onChange: (field: keyof QuoteFormData, val: string) => void;
  errors: Record<string, string>;
}

export const ContactFields: React.FC<ContactFieldsProps> = ({
  name,
  email,
  phone,
  businessName,
  onChange,
  errors,
}) => {
  return (
    <div className="space-y-4">
      <label className="block text-xs sm:text-sm font-semibold text-slate-200">
        3. Tus Datos de Contacto
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nombre */}
        <div className="space-y-1">
          <label htmlFor="quote-name" className="block text-xs text-slate-300">
            Nombre y Apellido <span className="text-violet-400">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            value={name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="Ej: Martín Rodríguez"
            autoComplete="name"
            className={`w-full p-3 rounded-xl bg-black/40 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all ${
              errors.name ? "border-rose-500/80" : "border-white/10"
            }`}
          />
          {errors.name && <p className="text-[11px] text-rose-400">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="quote-email" className="block text-xs text-slate-300">
            Email de Contacto <span className="text-violet-400">*</span>
          </label>
          <input
            id="quote-email"
            type="email"
            value={email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="martin@empresa.com"
            autoComplete="email"
            className={`w-full p-3 rounded-xl bg-black/40 border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all ${
              errors.email ? "border-rose-500/80" : "border-white/10"
            }`}
          />
          {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
        </div>

        {/* WhatsApp / Teléfono */}
        <div className="space-y-1">
          <label htmlFor="quote-phone" className="block text-xs text-slate-300">
            WhatsApp / Teléfono (opcional)
          </label>
          <input
            id="quote-phone"
            type="tel"
            value={phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="+54 9 11 1234-5678"
            autoComplete="tel"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all"
          />
          <span className="text-[10px] text-slate-400">Para contactarte directamente si preferís WhatsApp.</span>
        </div>

        {/* Nombre del Negocio */}
        <div className="space-y-1">
          <label htmlFor="quote-business" className="block text-xs text-slate-300">
            Empresa / Emprendimiento (opcional)
          </label>
          <input
            id="quote-business"
            type="text"
            value={businessName}
            onChange={(e) => onChange("businessName", e.target.value)}
            placeholder="Ej: Rodríguez & Asoc. / Constructora Sur"
            autoComplete="organization"
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all"
          />
        </div>
      </div>
    </div>
  );
};
