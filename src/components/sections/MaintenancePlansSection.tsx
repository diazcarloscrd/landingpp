import React from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/config/site";
import {
  ShieldCheck,
  Server,
  Rocket,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Wrench,
} from "lucide-react";

const PLANS = [
  {
    id: "llave-en-mano",
    name: "Entrega Llave en Mano",
    badge: "Sin Abono Mensual Obligatorio",
    icon: Wrench,
    highlight: false,
    desc: "Ideal si solo necesitás el desarrollo inicial listo para usar y preferís administrarlo por tu cuenta.",
    features: [
      "Código y plataforma 100% de tu propiedad",
      "Capacitación de uso del panel o sistema",
      "Garantía técnica post-lanzamiento incluida",
      "Sin ataduras ni contratos de permanencia",
      "Posibilidad de pedir mejoras puntuales cuando quieras",
    ],
    cta: "Consultar Modalidad",
    whatsappMsg:
      "Hola CDByte! Quiero consultar por un desarrollo con entrega llave en mano.",
  },
  {
    id: "mantenimiento-impulso",
    name: "Plan Mantenimiento & Hosting",
    badge: "El Más Elegido • Tranquilidad Total",
    icon: Server,
    highlight: true,
    desc: "Nos ocupamos de que tu web, tienda o sistema esté siempre rápido, seguro, actualizado y online 24/7.",
    features: [
      "Hosting de alta velocidad y certificado SSL seguro",
      "Copias de seguridad (Backups) periódicas",
      "Monitoreo de funcionamiento y seguridad técnica",
      "Ajustes menores mensuales (textos, fotos, promociones)",
      "Soporte técnico directo por WhatsApp ante cualquier duda",
    ],
    cta: "Consultar Plan Mantenimiento",
    whatsappMsg:
      "Hola CDByte! Me interesa conocer los detalles del Plan de Mantenimiento y Hosting mensual.",
  },
  {
    id: "evolucion-continua",
    name: "Plan Evolución & Nuevos Módulos",
    badge: "Para Negocios en Crecimiento",
    icon: Rocket,
    highlight: false,
    desc: "Para empresas que buscan sumar nuevas funciones, reportes o mejoras comerciales todos los meses.",
    features: [
      "Todo lo incluido en el Plan Mantenimiento & Hosting",
      "Bolsa de horas mensuales para programar nuevas funciones",
      "Optimización continua de velocidad y conversión SEO",
      "Prioridad de atención e implementación ágil",
      "Reunión mensual de seguimiento 1 a 1",
    ],
    cta: "Consultar Plan Evolución",
    whatsappMsg:
      "Hola CDByte! Quiero consultar por el Plan Evolución para mi negocio.",
  },
];

export const MaintenancePlansSection: React.FC = () => {
  return (
    <section
      id="mantenimiento"
      className="relative py-24 bg-[#060715] border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Acompañamiento Flexible
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Vos Elegís Cómo Gestionar tu{" "}
            <span className="bg-gradient-to-r from-violet-400 to-emerald-300 bg-clip-text text-transparent">
              Proyecto una vez Lanzado
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Tu plataforma es tuya desde el día uno. Podés autogestionarla sin abonos fijos o delegarnos el mantenimiento técnico mensual para despreocuparte por completo.
          </p>
        </div>

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

                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
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

                  <a
                    href={getWhatsAppLink(plan.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      plan.highlight
                        ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20"
                        : "bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{plan.cta}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
