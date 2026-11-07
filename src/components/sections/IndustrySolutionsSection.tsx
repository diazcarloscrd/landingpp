"use client";

import React, { useState } from "react";
import {
  Briefcase,
  UtensilsCrossed,
  Store,
  HardHat,
  Sparkles,
  Scissors,
  Dumbbell,
  Laptop,
  Check,
  ArrowRight,
} from "lucide-react";

interface Industry {
  id: string;
  name: string;
  icon: any;
  problem: string;
  solution: string;
  deliverables: string[];
  recommendedService: string;
}

const industries: Industry[] = [
  {
    id: "profesionales",
    name: "Profesionales & Consultores",
    icon: Briefcase,
    problem:
      "Dependencia de recomendaciones boca a boca, falta de presencia profesional seria y pérdida de tiempo respondiendo preguntas básicas.",
    solution:
      "Landing page de alta gama con autoridad de marca, presentación de especialidades, agenda de turnos y formulario de captación directa.",
    deliverables: [
      "Landing corporativa moderna",
      "Agenda de citas integrada",
      "Botón WhatsApp automatizado",
      "Ficha de casos y servicios",
    ],
    recommendedService: "Landing Page Profesional",
  },
  {
    id: "gastronomia",
    name: "Gastronomía & Locales",
    icon: UtensilsCrossed,
    problem:
      "Comisiones abusivas de aplicaciones de delivery (15% - 30%) y caos al tomar pedidos manualmente por WhatsApp.",
    solution:
      "Tienda online de pedidos directos: menú interactivo, opciones de envío/retiro, cálculo de envío y recepción ordenada de pedidos.",
    deliverables: [
      "Catálogo dinámico con fotos y agregados",
      "Pasarela de pago y cobro al instante",
      "Formato listo para cocina / WhatsApp",
      "Panel de control de pedidos en vivo",
    ],
    recommendedService: "E-Commerce Gastronómico",
  },
  {
    id: "comercios",
    name: "Comercios & Retail",
    icon: Store,
    problem:
      "Pérdida de ventas fuera de horario comercial y desorganización con el stock entre tienda física e internet.",
    solution:
      "E-commerce ágil con carrito de compras, variantes de productos (talles, colores), medios de pago locales y control de stock centralizado.",
    deliverables: [
      "Tienda online responsive 24/7",
      "Cobros con Mercado Pago / Tarjetas",
      "Gestión de envíos a todo el país",
      "Panel para subir productos fácilmente",
    ],
    recommendedService: "Tienda Online / E-Commerce",
  },
  {
    id: "construccion",
    name: "Constructoras & Empresas",
    icon: HardHat,
    problem:
      "Presupuestos en planillas de Excel desactualizadas, obras sin seguimiento unificado y clientes que demandan reportes.",
    solution:
      "Sistema de gestión y CRM a medida para certificar avances, controlar costos por obra, gestionar proveedores y enviar presupuestos formales.",
    deliverables: [
      "Software web interno multiusuario",
      "Módulo de presupuestos y costos",
      "Panel de avances de obra y tareas",
      "Exportación de reportes PDF gerenciales",
    ],
    recommendedService: "Sistema CRM / ERP a Medida",
  },
  {
    id: "estetica",
    name: "Estética, Barberías & Spa",
    icon: Scissors,
    problem:
      "Turnos superpuestos, inasistencias y recepcionistas desbordados atendiendo mensajes.",
    solution:
      "Plataforma de reservas con confirmación automática, recordatorios preventivos y venta de productos o vouchers online.",
    deliverables: [
      "Calendario online para clientes",
      "Recordatorios automáticos vía WhatsApp/Email",
      "Venta de giftcards y tratamientos",
      "Base de clientes con historial de visitas",
    ],
    recommendedService: "Web con Sistema de Turnos",
  },
  {
    id: "fitness",
    name: "Gimnasios & Bienestar",
    icon: Dumbbell,
    problem:
      "Dificultad para cobrar membresías mensuales y registrar el acceso de los alumnos.",
    solution:
      "Software de membresías con cobro recurrente automático, panel de rutinas y landing de inscripción para nuevas altas.",
    deliverables: [
      "Suscripciones mensuales automatizadas",
      "Control de cuotas y altas",
      "Landing page de captación de socios",
      "Módulo de planes y horarios de clases",
    ],
    recommendedService: "Software de Membresías & Web",
  },
];

export const IndustrySolutionsSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industries[0]);

  return (
    <section id="rubros" className="relative py-24 bg-[#060714] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            Soluciones por Rubro
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tecnología Diseñada para{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Tu Tipo de Negocio
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No desarrollamos abstracciones genéricas. Resolvemos las fricciones diarias que frenan el crecimiento de tu actividad.
          </p>
        </div>

        {/* Selector de Rubros */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-violet-400"
                    : "bg-surface-card text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tarjeta de Detalle del Rubro Seleccionado */}
        <div className="max-w-4xl mx-auto rounded-2xl p-[1px] bg-gradient-to-b from-violet-500/30 via-white/5 to-transparent shadow-glow-sm">
          <div className="bg-[#0b0c20]/95 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div className="inline-block px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold">
                  Solución Recomendada: {selectedIndustry.recommendedService}
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Cómo transformamos tu operación en {selectedIndustry.name}
                </h3>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-200">
                    <strong className="text-rose-300 block mb-1">El Desafío Común:</strong>
                    {selectedIndustry.problem}
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200">
                    <strong className="text-emerald-300 block mb-1">Nuestra Solución:</strong>
                    {selectedIndustry.solution}
                  </div>
                </div>
              </div>

              {/* Columna de Entregables */}
              <div className="p-6 rounded-xl bg-black/40 border border-white/10 space-y-4">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider text-xs">
                  Módulos y Entregables Clave
                </h4>

                <div className="space-y-2.5">
                  {selectedIndustry.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-violet-600/30 flex items-center justify-center shrink-0 text-violet-400">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href="#presupuesto"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-colors"
                  >
                    <span>Consultar para mi {selectedIndustry.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

