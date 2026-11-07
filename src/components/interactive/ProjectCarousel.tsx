"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Layers,
  ShoppingBag,
  Globe,
  Calendar,
  Calculator,
  Zap,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

import { CrmDemo } from "./demos/CrmDemo";
import { EcommerceDemo } from "./demos/EcommerceDemo";
import { LandingDemo } from "./demos/LandingDemo";
import { TurnosDemo } from "./demos/TurnosDemo";
import { CotizadorDemo } from "./demos/CotizadorDemo";
import { RedisenoDemo } from "./demos/RedisenoDemo";

interface SlideMetadata {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  deliverables: string[];
}

const SLIDES: SlideMetadata[] = [
  {
    id: "crm",
    tag: "CRM & Gestión",
    title: "CRM & Panel Operativo a Medida",
    subtitle: "Centralizá clientes, presupuestos, obras, stock y órdenes en un solo panel privado.",
    icon: Layers,
    deliverables: ["Pipeline de Ventas", "Control de Obras y Stock", "Métricas en Vivo", "Multi-usuario"],
  },
  {
    id: "ecommerce",
    tag: "E-Commerce",
    title: "E-Commerce & Catálogo con Carrito",
    subtitle: "Vendé sin pagar comisiones por venta. Cobros con Mercado Pago y pedidos directos.",
    icon: ShoppingBag,
    deliverables: ["Carrito Dinámico", "Mercado Pago Integrado", "Panel de Pedidos", "Variantes y Stock"],
  },
  {
    id: "landing",
    tag: "Landing Page",
    title: "Landing Page de Alta Conversión",
    subtitle: "Diseñada para transformar visitas de Google y redes en consultas comerciales concretas.",
    icon: Globe,
    deliverables: ["Diseño UI/UX Exclusivo", "Carga en < 1 seg", "Integración WhatsApp", "SEO Técnico"],
  },
  {
    id: "turnos",
    tag: "Turnos Web",
    title: "Sistema de Turnos & Reservas Web",
    subtitle: "Tus clientes eligen día y horario libre desde su móvil las 24 hs sin esperas.",
    icon: Calendar,
    deliverables: ["Agenda en Tiempo Real", "Cobro de Seña Opcional", "Recordatorios", "Por Profesional"],
  },
  {
    id: "cotizador",
    tag: "Cotizador Web",
    title: "Cotizador & Calculadora Interactiva",
    subtitle: "El visitante calcula su presupuesto según sus necesidades y te contacta calificado.",
    icon: Calculator,
    deliverables: ["Fórmulas a Medida", "Resumen a WhatsApp", "Captura de Leads", "Sin Costos Ocultos"],
  },
  {
    id: "rediseno",
    tag: "Rediseño Express",
    title: "Rediseño Express & Optimización Web",
    subtitle: "Convertimos tu web anterior en una plataforma moderna, fluida y con carga instantánea.",
    icon: Zap,
    deliverables: ["Renovación Visual", "Migración a Next.js", "100% Celulares", "Velocidad 95+"],
  },
];

export const ProjectCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = SLIDES[activeIndex];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 8500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setIsPaused(true);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    setIsPaused(true);
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-5xl mx-auto"
    >
      {/* Barra superior de navegación */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 px-1">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-violet-300">
          <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
          <span>Explorá ejemplos interactivos de soluciones CDByte:</span>
        </div>

        {/* Controles de flechas + indicador numérico */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Proyecto anterior"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#0d1029] hover:bg-violet-600/25 border border-violet-500/30 text-xs font-medium text-slate-200 hover:text-white transition-all active:scale-95"
          >
            <ChevronLeft className="w-4 h-4 text-violet-400" />
            <span>Anterior</span>
          </button>

          <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-violet-300 font-mono">
            {activeIndex + 1} / {SLIDES.length}
          </span>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Siguiente proyecto"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#0d1029] hover:bg-violet-600/25 border border-violet-500/30 text-xs font-medium text-slate-200 hover:text-white transition-all active:scale-95"
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4 text-violet-400" />
          </button>
        </div>
      </div>

      {/* Grilla de pestañas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
        {SLIDES.map((slide, idx) => {
          const Icon = slide.icon;
          const isActive = idx === activeIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                isActive
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-violet-400/60 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "bg-[#0b0d22]/90 text-slate-400 border-white/10 hover:text-white hover:border-violet-500/30 hover:bg-white/[0.04]"
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{slide.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Marco Principal de la Demo */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-b from-violet-500/40 via-purple-500/15 to-white/5 shadow-[0_20px_70px_rgba(139,92,246,0.2)]">
        <div className="w-full bg-[#0a0c1f]/95 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10">
          {/* Barra tipo navegador */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 bg-white/[0.03] gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shrink-0" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" />
              <div className="ml-2 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] text-slate-400 truncate">
                app.cdbyte.dev/<span className="text-violet-300 font-medium">{currentSlide.id}</span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/30 text-[11px] font-medium text-violet-300 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Demo Interactiva
            </span>
          </div>

          {/* Cabecera Descriptiva */}
          <div className="px-4 sm:px-6 pt-5 pb-4 border-b border-white/5 bg-gradient-to-r from-violet-950/30 via-transparent to-indigo-950/20 text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">
                <span>Demo #{activeIndex + 1}</span>
                <span>•</span>
                <span>{currentSlide.tag}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">{currentSlide.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{currentSlide.subtitle}</p>
            </div>

            {/* Entregables */}
            <div className="flex flex-wrap gap-1.5 shrink-0">
              {currentSlide.deliverables.map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 flex items-center gap-1"
                >
                  <Check className="w-3 h-3 text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Renderizado de la demo modular */}
          <div className="p-4 sm:p-6 text-left min-h-[300px] flex flex-col justify-between">
            <div>
              {currentSlide.id === "crm" && <CrmDemo />}
              {currentSlide.id === "ecommerce" && <EcommerceDemo />}
              {currentSlide.id === "landing" && <LandingDemo />}
              {currentSlide.id === "turnos" && <TurnosDemo />}
              {currentSlide.id === "cotizador" && <CotizadorDemo />}
              {currentSlide.id === "rediseno" && <RedisenoDemo />}
            </div>

            {/* Barra Inferior con único enlace de exploración al servicio correspondiente */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Indicadores de punto */}
              <div className="flex items-center gap-2">
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={`Ir a la demo de ${s.title}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-7 bg-violet-400"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Único enlace por slide (regla de 3 niveles): lleva al servicio */}
              <Link
                href={`#servicio-${currentSlide.id}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-violet-300 hover:text-white transition-colors group/link"
              >
                <span>¿Querés algo así para tu negocio? Ver el servicio</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
