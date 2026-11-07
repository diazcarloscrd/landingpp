"use client";

import React, { useState } from "react";
import { useQuote } from "@/context/QuoteContext";
import { getWhatsAppLink } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { ServiceType } from "@/types/quote";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  Clock,
  Layers,
} from "lucide-react";

interface ProjectOption {
  id: ServiceType;
  label: string;
  desc: string;
  estimatedDays: string;
}

const PROJECT_TYPES: ProjectOption[] = [
  {
    id: "crm",
    label: "Sistema CRM / Software de Gestión",
    desc: "Clientes, presupuestos, obras, stock y métricas",
    estimatedDays: "Por etapas (desde propuesta inicial)",
  },
  {
    id: "ecommerce",
    label: "Tienda Online / E-Commerce",
    desc: "Catálogo de productos, carrito y cobro automático",
    estimatedDays: "2 a 4 semanas",
  },
  {
    id: "landing",
    label: "Landing Page / Web Comercial",
    desc: "Presencia profesional y captación de consultas",
    estimatedDays: "1 a 2 semanas",
  },
  {
    id: "turnos",
    label: "Sistema de Turnos & Reservas",
    desc: "Agenda automática 24/7 y confirmaciones",
    estimatedDays: "1 a 3 semanas",
  },
  {
    id: "cotizador",
    label: "Cotizador / Calculadora Web",
    desc: "Simulador de presupuestos con envío de datos",
    estimatedDays: "1 a 2 semanas",
  },
  {
    id: "rediseno",
    label: "Rediseño Express & Velocidad",
    desc: "Modernización de una web existente o lenta",
    estimatedDays: "1 semana",
  },
];

const EXTRA_FEATURES = [
  "Integración y Pedidos a WhatsApp",
  "Cobros con Mercado Pago / Transferencias",
  "Panel Administrativo Autogestionable",
  "Agenda de Turnos o Citas Integrada",
  "Simulador de Presupuestos para Clientes",
  "Carga de Catálogo o Base de Clientes",
  "Configuración de Dominio y Certificado SSL",
  "Soporte y Monitoreo Técnico Continuo",
];

export const BudgetCalculatorSection: React.FC = () => {
  const { preloadQuote } = useQuote();
  const [selectedProject, setSelectedProject] = useState<ProjectOption>(PROJECT_TYPES[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([
    "Integración y Pedidos a WhatsApp",
    "Panel Administrativo Autogestionable",
  ]);
  const [urgency, setUrgency] = useState<"Normal" | "Urgente">("Normal");

  const toggleExtra = (item: string) => {
    setSelectedExtras((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const handleSendToForm = () => {
    const summaryMessage =
      `Estimación armada desde el planificador web:\n` +
      `• Servicio: ${selectedProject.label}\n` +
      `• Módulos seleccionados: ${
        selectedExtras.length > 0 ? selectedExtras.join(", ") : "Configuración base estándar"
      }\n` +
      `• Plazo estimado deseado: ${urgency === "Urgente" ? "Prioritario / lo antes posible" : "Plazo estándar por etapas"}.`;

    preloadQuote(
      {
        serviceType: selectedProject.id,
        projectDetails: {
          selectedLabel: selectedProject.label,
          modules: selectedExtras,
          urgency,
        },
        message: summaryMessage,
        timeline: urgency === "Urgente" ? "urgente" : "flexible",
      },
      "presupuesto"
    );
  };

  const whatsappSummaryText =
    `Hola CDByte! Armé una estimación en el planificador web:\n` +
    `• Proyecto: ${selectedProject.label}\n` +
    `• Módulos: ${selectedExtras.length > 0 ? selectedExtras.join(", ") : "Base estándar"}\n` +
    `• Prioridad: ${urgency}\n` +
    `Quiero consultar por presupuesto formal.`;

  return (
    <section
      id="estimador"
      className="relative py-24 bg-[#08091a] border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      {/* Anchor invisible para compatibilidad con enlaces viejos #calculadora */}
      <div id="calculadora" className="absolute -top-20" aria-hidden="true" />

      {/* Glow focalizado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Estimador de Proyectos"
          badgeIcon={<Calculator className="w-3.5 h-3.5 text-violet-400" />}
          title={
            <>
              Planificá tu Proyecto a Medida y{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-emerald-300 bg-clip-text text-transparent">
                Comenzá con Claridad
              </span>
            </>
          }
          subtitle="Seleccioná el tipo de solución y las funcionalidades clave que requiere tu empresa para calcular el alcance orientativo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Opciones de configuración */}
          <div className="lg:col-span-7 space-y-6">
            {/* Paso 1: Tipo de Proyecto */}
            <div className="p-6 rounded-2xl bg-[#0c0d24]/90 border border-white/10 space-y-3">
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block">
                Paso 1: ¿Qué tipo de plataforma necesitás?
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROJECT_TYPES.map((opt) => {
                  const isSelected = selectedProject.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedProject(opt)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-violet-600/25 border-violet-400 text-white shadow-glow-sm"
                          : "bg-black/30 border-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <p className="text-xs sm:text-sm font-bold text-white">{opt.label}</p>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 2: Funciones Extra */}
            <div className="p-6 rounded-2xl bg-[#0c0d24]/90 border border-white/10 space-y-3">
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block">
                Paso 2: Elegí los módulos y funciones que necesitás
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EXTRA_FEATURES.map((item, idx) => {
                  const isChecked = selectedExtras.includes(item);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleExtra(item)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl text-left border text-xs transition-all ${
                        isChecked
                          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-200"
                          : "bg-black/30 border-white/5 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                          isChecked
                            ? "bg-emerald-500 border-emerald-400 text-black font-bold"
                            : "border-white/20 bg-white/5"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span className="leading-snug">{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 3: Prioridad de Entrega */}
            <div className="p-5 rounded-2xl bg-[#0c0d24]/90 border border-white/10 space-y-3">
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block">
                Paso 3: Plazo de implementación estimado
              </span>
              <div className="grid grid-cols-2 gap-3">
                {(["Normal", "Urgente"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setUrgency(u)}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                      urgency === u
                        ? "bg-violet-600 text-white border-violet-400 shadow-glow-sm"
                        : "bg-black/40 text-slate-400 border-white/10 hover:text-white"
                    }`}
                  >
                    {u === "Normal" ? "Plazo Estándar (Por Etapas)" : "Prioritario / Urgente"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Resumen con CTA Fuerte */}
          <div className="lg:col-span-5 rounded-3xl p-[1px] bg-gradient-to-b from-violet-500/50 via-emerald-500/30 to-transparent shadow-[0_20px_60px_rgba(139,92,246,0.2)]">
            <div className="bg-[#0c0e26]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
                    Resumen del Estimador
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-0.5 font-display">
                    {selectedProject.label}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    Plazo referencial:
                  </span>
                  <span className="font-bold text-emerald-300">
                    {selectedProject.estimatedDays}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <p className="text-xs font-semibold text-slate-300 uppercase">
                    Módulos elegidos ({selectedExtras.length}):
                  </p>
                  {selectedExtras.length > 0 ? (
                    <ul className="space-y-1.5">
                      {selectedExtras.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-slate-400">
                      Configuración base del servicio.
                    </p>
                  )}
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  * El presupuesto final se define con transparencia según los requerimientos exactos de tu empresa. Sin costos ocultos.
                </p>
              </div>

              {/* Botón Fuerte 2 de la página: enviar al formulario */}
              <div className="space-y-3 pt-2">
                <Button
                  onClick={handleSendToForm}
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Enviar esta estimación
                </Button>

                {/* Enlace secundario de texto a WhatsApp */}
                <div className="text-center pt-1">
                  <a
                    href={getWhatsAppLink(whatsappSummaryText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>O consultar este estimado por WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
