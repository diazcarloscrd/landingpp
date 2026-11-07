"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  UtensilsCrossed,
  Store,
  HardHat,
  Sparkles,
  Scissors,
  Dumbbell,
  Check,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceType } from "@/types/quote";

interface Industry {
  id: string;
  name: string;
  icon: React.ElementType;
  problem: string;
  solution: string;
  deliverables: string[];
  recommendedService: string;
  serviceId: ServiceType;
}

const industries: Industry[] = [
  {
    id: "profesionales",
    name: "Profesionales & Consultores",
    icon: Briefcase,
    problem:
      "Dependencia exclusiva de recomendaciones boca a boca, falta de presencia profesional seria y tiempo perdido respondiendo consultas básicas.",
    solution:
      "Landing page de alta gama con autoridad de marca, presentación de especialidades, agenda de turnos y formulario de captación directa.",
    deliverables: [
      "Landing corporativa moderna",
      "Agenda de citas integrada",
      "Botón WhatsApp automatizado",
      "Ficha de casos y servicios",
    ],
    recommendedService: "Landing Page Profesional",
    serviceId: "landing",
  },
  {
    id: "gastronomia",
    name: "Gastronomía & Locales",
    icon: UtensilsCrossed,
    problem:
      "Comisiones abusivas de aplicaciones de delivery (15% - 30%) y caos al tomar pedidos manualmente por WhatsApp en horas pico.",
    solution:
      "Tienda online de pedidos directos: menú interactivo, opciones de envío o retiro en local, cálculo de envío y recepción ordenada de órdenes.",
    deliverables: [
      "Catálogo dinámico con fotos y agregados",
      "Pasarela de pago y cobro al instante",
      "Formato listo para cocina y WhatsApp",
      "Panel de control de pedidos en vivo",
    ],
    recommendedService: "E-Commerce Gastronómico",
    serviceId: "ecommerce",
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
    serviceId: "ecommerce",
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
      "Métricas operativas en tiempo real",
    ],
    recommendedService: "Sistema CRM / ERP a Medida",
    serviceId: "crm",
  },
  {
    id: "estetica",
    name: "Estética, Barberías & Spa",
    icon: Scissors,
    problem:
      "Turnos superpuestos, inasistencias sin aviso y recepcionistas desbordados atendiendo mensajes.",
    solution:
      "Plataforma de reservas con confirmación automática, recordatorios preventivos y opción de cobro de seña online.",
    deliverables: [
      "Calendario online para clientes 24/7",
      "Recordatorios automáticos vía WhatsApp/Email",
      "Cobro de señas con Mercado Pago",
      "Base de clientes con historial de visitas",
    ],
    recommendedService: "Web con Sistema de Turnos",
    serviceId: "turnos",
  },
  {
    id: "fitness",
    name: "Gimnasios & Bienestar",
    icon: Dumbbell,
    problem:
      "Dificultad para registrar cobros recurrentes mensuales y controlar el acceso de los alumnos.",
    solution:
      "Software de membresías con cobro recurrente automático, panel de asistencias y landing de inscripción para nuevas altas.",
    deliverables: [
      "Suscripciones mensuales automatizadas",
      "Control de cuotas y altas",
      "Landing page de captación de socios",
      "Módulo de planes y horarios de clases",
    ],
    recommendedService: "Software de Gestión a Medida",
    serviceId: "crm",
  },
];

export const IndustrySolutionsSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industries[0]);

  return (
    <section id="rubros" className="relative py-24 bg-[#060714] border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Soluciones por Rubro"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-violet-400" />}
          title={
            <>
              Tecnología Adaptada a{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                Tu Tipo de Negocio
              </span>
            </>
          }
          subtitle="No desarrollamos modelos genéricos. Resolvemos las fricciones diarias que frenan las ventas o el orden en tu actividad."
        />

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
                    : "bg-[#0d0e24] text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
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

                <h3 className="text-2xl font-bold text-white tracking-tight font-display">
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

                {/* Conexión interna hacia el servicio (en lugar de CTA que corta la lectura) */}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={`#servicio-${selectedIndustry.serviceId}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-violet-300 hover:text-white transition-colors group/link"
                  >
                    <span>Solución recomendada: {selectedIndustry.recommendedService} → ver servicio</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
