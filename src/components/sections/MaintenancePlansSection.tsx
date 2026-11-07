"use client";

import React from "react";
import { useQuote } from "@/context/QuoteContext";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Server,
  Rocket,
  CheckCircle2,
  Wrench,
  ArrowRight,
} from "lucide-react";

const PLANS = [
  {
    id: "llave-en-mano",
    name: "Entrega Llave en Mano",
    badge: "Sin Abono Mensual Obligatorio",
    icon: Wrench,
    highlight: false,
    desc: "Ideal si solo necesitás el desarrollo inicial listo para usar y preferís administrarlo por tu cuenta sin costos fijos.",
    features: [
      "Código y plataforma 100% de tu propiedad",
      "Capacitación de uso del panel o sistema",
      "Garantía técnica post-lanzamiento incluida",
      "Sin ataduras ni contratos de permanencia",
      "Posibilidad de pedir mejoras puntuales cuando quieras",
    ],
    cta: "Consultar esta modalidad",
  },
  {
    id: "mantenimiento-impulso",
    name: "Plan Mantenimiento & Hosting",
    badge: "El Más Elegido • Tranquilidad Total",
    icon: Server,
    highlight: true,
    desc: "Nos ocupamos de que tu web, tienda o sistema esté siempre rápido, seguro, respaldado y online 24/7.",
    features: [
      "Hosting de alta velocidad y certificado SSL seguro",
      "Copias de seguridad periódicas automatizadas",
      "Monitoreo de funcionamiento y seguridad técnica",
      "Ajustes menores mensuales (textos, fotos, promociones)",
      "Soporte técnico directo ante cualquier duda",
    ],
    cta: "Consultar este plan",
  },
  {
    id: "evolucion-continua",
    name: "Plan Evolución & Nuevos Módulos",
    badge: "Para Negocios en Crecimiento",
    icon: Rocket,
    highlight: false,
    desc: "Para empresas que buscan sumar nuevas funciones, reportes o mejoras comerciales continuas mes a mes.",
    features: [
      "Todo lo incluido en el Plan Mantenimiento & Hosting",
      "Bolsa de horas mensuales para programar nuevas funciones",
      "Optimización continua de velocidad y conversión",
      "Prioridad de atención e implementación ágil",
      "Reunión mensual de seguimiento 1 a 1",
    ],
    cta: "Consultar este plan",
  },
];

export const MaintenancePlansSection: React.FC = () => {
  const { preloadQuote } = useQuote();

  const handleSelectPlan = (plan: (typeof PLANS)[number]) => {
    preloadQuote(
      {
        message: `Hola CDByte, me interesa consultar por el plan de acompañamiento "${plan.name}" (${plan.badge}).`,
        projectDetails: {
          selectedPlan: plan.name,
          planId: plan.id,
        },
      },
      "presupuesto"
    );
  };

  return (
    <section
      id="mantenimiento"
      className="relative py-24 bg-[#060715] border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Acompañamiento Flexible"
          badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
          title={
            <>
              Vos Elegís Cómo Gestionar tu{" "}
              <span className="bg-gradient-to-r from-violet-400 to-emerald-300 bg-clip-text text-transparent">
                Plataforma una vez Lanzada
              </span>
            </>
          }
          subtitle="Tu plataforma es tuya desde el día uno. Podés autogestionarla sin costos fijos o delegarnos el mantenimiento técnico para despreocuparte por completo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-[1px] flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-to-b from-emerald-500/50 via-violet-500/30 to-transparent shadow-glow-sm"
                    : "bg-gradient-to-b from-white/15 via-white/5 to-transparent"
                }`}
              >
                <div className="w-full h-full bg-[#0b0d22]/95 rounded-2xl p-7 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5 gap-2">
                      <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${
                          plan.highlight
                            ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                            : "bg-white/5 text-slate-300 border-white/10"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-display">{plan.name}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">{plan.desc}</p>

                    <div className="space-y-3 mb-7">
                      {plan.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón que precarga el plan en el formulario (sin WhatsApp individual) */}
                  <Button
                    onClick={() => handleSelectPlan(plan)}
                    variant={plan.highlight ? "primary" : "secondary"}
                    size="md"
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
