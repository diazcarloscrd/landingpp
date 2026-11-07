"use client";

import React from "react";
import Link from "next/link";
import { useQuoteForm } from "@/hooks/useQuoteForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ServiceSelector } from "./quote/ServiceSelector";
import { MessageInput } from "./quote/MessageInput";
import { ContactFields } from "./quote/ContactFields";
import { BudgetTimelineFields } from "./quote/BudgetTimelineFields";
import { SuccessScreen } from "./quote/SuccessScreen";
import {
  Send,
  Sparkles,
  AlertCircle,
  ShieldCheck,
  Loader2,
} from "lucide-react";

export const QuoteFormSection: React.FC = () => {
  const {
    formData,
    errors,
    status,
    errorMessage,
    successData,
    handleChange,
    applySuggestion,
    handleSubmit,
    resetForm,
  } = useQuoteForm();

  return (
    <section
      id="presupuesto"
      className="relative py-24 bg-[#060714] border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      {/* Resplandor focalizado en el formulario */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-violet-600/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Solicitud de Presupuesto"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-violet-400" />}
          title={
            <>
              Contanos Tu Proyecto y Recibí una{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Propuesta Transparente
              </span>
            </>
          }
          subtitle="Completá los datos básicos de tu necesidad. Te respondemos con un alcance detallado por etapas, plazos claros y presupuesto sin sorpresas."
        />

        <div className="rounded-3xl p-[1px] bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent shadow-[0_20px_70px_rgba(139,92,246,0.18)]">
          <div className="bg-[#0b0c22]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/10">
            {status === "success" && successData ? (
              <SuccessScreen
                leadId={successData.leadId}
                name={successData.name}
                onReset={resetForm}
              />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                {/* Campo trampa Honeypot para bots (oculto) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company_website_url">No completar este campo</label>
                  <input
                    id="company_website_url"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot || ""}
                    onChange={(e) => handleChange("honeypot", e.target.value)}
                  />
                </div>

                {/* 1. Selector de Servicio */}
                <ServiceSelector
                  value={formData.serviceType}
                  onChange={(val) => handleChange("serviceType", val)}
                  error={errors.serviceType}
                />

                {/* 2. Mensaje y Sugerencias */}
                <MessageInput
                  serviceType={formData.serviceType}
                  value={formData.message}
                  onChange={(val) => handleChange("message", val)}
                  onApplySuggestion={applySuggestion}
                  error={errors.message}
                />

                {/* 3. Datos de Contacto */}
                <ContactFields
                  name={formData.name}
                  email={formData.email}
                  phone={formData.phone || ""}
                  businessName={formData.businessName || ""}
                  onChange={handleChange}
                  errors={errors}
                />

                {/* 4. Presupuesto y Plazo */}
                <BudgetTimelineFields
                  budgetRange={formData.budgetRange || "flexible"}
                  timeline={formData.timeline || "flexible"}
                  onChange={handleChange}
                />

                {/* Checkbox de Consentimiento con Enlace a /privacidad */}
                <div className="space-y-1 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => handleChange("consent", e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-white/20 bg-black/40 text-violet-600 focus:ring-violet-400 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed select-none">
                      Acepto ser contactado por CDByte para recibir la propuesta comercial y comprendo el tratamiento de mis datos según el{" "}
                      <Link
                        href="/privacidad"
                        target="_blank"
                        className="text-violet-400 hover:text-violet-300 underline underline-offset-2"
                      >
                        Aviso de Privacidad
                      </Link>
                      . <span className="text-violet-400">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[11px] text-rose-400 pl-7">{errors.consent}</p>
                  )}
                </div>

                {/* Alerta de Error Recuperable */}
                {status === "error" && errorMessage && (
                  <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-200 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold text-rose-300">No pudimos procesar tu solicitud:</p>
                      <p className="text-rose-200 leading-relaxed">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Botón CTA Fuerte 3 de la página: Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={status === "submitting"}
                    icon={
                      status === "submitting" ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )
                    }
                  >
                    {status === "submitting"
                      ? "Enviando solicitud..."
                      : "Enviar solicitud de presupuesto"}
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tus datos están protegidos. Respuesta directa 1 a 1 sin intermediarios.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
