"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  Clock,
  Layers,
  Check,
} from "lucide-react";

interface ProjectOption {
  id: string;
  label: string;
  desc: string;
  estimatedDays: string;
  complexityLabel: string;
}

const PROJECT_TYPES: ProjectOption[] = [
  {
    id: "Landing Page Profesional",
    label: "Landing Page / Web Comercial",
    desc: "Presencia profesional y captación de consultas",
    estimatedDays: "5 a 8 días hábiles",
    complexityLabel: "Alcance Ágil • Rápida salida al mercado",
  },
  {
    id: "E-Commerce / Tienda Online",
    label: "Tienda Online / E-Commerce",
    desc: "Catálogo de productos, carrito y pagos online",
    estimatedDays: "10 a 18 días hábiles",
    complexityLabel: "Alcance Comercial • Ventas automatizadas 24/7",
  },
  {
    id: "Sistema de Turnos Web",
    label: "Sistema de Turnos & Reservas",
    desc: "Agenda automática de horarios y recordatorios",
    estimatedDays: "7 a 14 días hábiles",
    complexityLabel: "Alcance Operativo • Ahorro de tiempo diario",
  },
  {
    id: "Cotizador Interactivo",
    label: "Cotizador / Calculadora Web",
    desc: "Simulador de presupuestos con envío a WhatsApp",
    estimatedDays: "5 a 10 días hábiles",
    complexityLabel: "Alcance Conversión • Prospectos calificados",
  },
  {
    id: "CRM / Sistema a Medida",
    label: "Sistema CRM / Software de Gestión",
    desc: "Clientes, stock, órdenes, caja y métricas",
    estimatedDays: "2 a 5 semanas (por etapas)",
    complexityLabel: "Alcance Integral • Digitalización completa",
  },
  {
    id: "Rediseño Express Web",
    label: "Rediseño Express & Velocidad",
    desc: "Modernización de una web existente o lenta",
    estimatedDays: "4 a 7 días hábiles",
    complexityLabel: "Alcance Renovación • Mejora inmediata",
  },
];

const EXTRA_FEATURES = [
  "Conexión y Pedidos a WhatsApp",
  "Cobros con Mercado Pago / Transferencia",
  "Panel Autoadministrable Simple",
  "Agenda de Turnos o Citas",
  "Calculadora / Cotizador de Precios",
  "Carga de Catálogo o Base de Clientes",
  "Configuración de Dominio (.com / .com.ar)",
  "Mantenimiento y Hosting Mensual",
];

export const BudgetCalculatorSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectOption>(PROJECT_TYPES[0]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([
    "Conexión y Pedidos a WhatsApp",
    "Panel Autoadministrable Simple",
  ]);
  const [urgency, setUrgency] = useState<"Normal" | "Urgente">("Normal");

  const toggleExtra = (item: string) => {
    setSelectedExtras((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const whatsappSummaryText =
    `Hola CDByte! Armé mi resumen en la calculadora de la web:\n` +
    `• Proyecto: ${selectedProject.label}\n` +
    `• Funciones elegidas: ${
      selectedExtras.length > 0 ? selectedExtras.join(", ") : "Base estándar"
    }\n` +
    `• Prioridad: ${urgency}\n` +
    `Me gustaría recibir asesoramiento y un presupuesto acorde.`;

  return (
    <section
      id="calculadora"
      className="relative py-24 bg-[#050613] border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      {/* Glow decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/80 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-violet-400" />
            Planificador Interactivo en 60 Segundos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Armá tu Proyecto a Medida y{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-emerald-300 bg-clip-text text-transparent">
              Cotizalo al Instante
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Seleccioná qué tipo de solución buscás y qué funciones necesitás para enviarnos el resumen listo en un clic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda: Configuración */}
          <div className="lg:col-span-7 bg-[#0b0d22]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 space-y-7">
            {/* Paso 1 */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                1. Elegí el tipo de proyecto principal:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = selectedProject.id === pt.id;
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => setSelectedProject(pt)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        isSelected
                          ? "bg-violet-600/20 border-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                          : "bg-black/30 border-white/10 text-slate-300 hover:border-white/25"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold">{pt.label}</span>
                        {isSelected && (
                          <span className="w-2.5 h-2.5 rounded-full bg-violet-400 shrink-0" />
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">{pt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 2 */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                2. Sumá las funcionalidades que te gustaría incluir:
              </label>
              <div className="flex flex-wrap gap-2">
                {EXTRA_FEATURES.map((feat) => {
                  const active = selectedExtras.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleExtra(feat)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all ${
                        active
                          ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-200"
                          : "bg-black/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                      }`}
                    >
                      <Check
                        className={`w-3.5 h-3.5 ${
                          active ? "text-emerald-400 opacity-100" : "opacity-30"
                        }`}
                      />
                      <span>{feat}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 3 */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                3. ¿Qué prioridad de lanzamiento tenés?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(["Normal", "Urgente"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setUrgency(u)}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                      urgency === u
                        ? "bg-violet-600 text-white border-violet-400"
                        : "bg-black/40 text-slate-400 border-white/10 hover:text-white"
                    }`}
                  >
                    {u === "Normal" ? "Plazo Estándar" : "Lo antes posible (Prioritario)"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Resumen Lista para Enviar */}
          <div className="lg:col-span-5 rounded-3xl p-[1px] bg-gradient-to-b from-violet-500/50 via-emerald-500/30 to-transparent shadow-[0_20px_60px_rgba(139,92,246,0.2)]">
            <div className="bg-[#0c0e26]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
                    Resumen de tu Proyecto
                  </span>
                  <h3 className="text-xl font-extrabold text-white mt-0.5">
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
                    Tiempo estimado:
                  </span>
                  <span className="font-bold text-emerald-300">
                    {selectedProject.estimatedDays}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <p className="text-xs font-semibold text-slate-300 uppercase">
                    Módulos seleccionados ({selectedExtras.length}):
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
                      Configuración base estándar del proyecto.
                    </p>
                  )}
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  * El presupuesto final se define de forma transparente según los detalles específicos de tu negocio. Sin costos ocultos.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppLink(whatsappSummaryText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Recibir Presupuesto por WhatsApp</span>
                </a>

                <Link
                  href="#presupuesto"
                  className="w-full py-3 px-5 rounded-full font-semibold text-xs sm:text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-all"
                >
                  <span>O enviarlo por Formulario Web</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
