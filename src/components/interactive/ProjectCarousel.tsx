"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/config/site";
import {
  TrendingUp,
  Users,
  ShoppingBag,
  CheckCircle2,
  Layers,
  Calendar,
  Calculator,
  Zap,
  Globe,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowRight,
  Clock,
  CreditCard,
  Sparkles,
  Plus,
  Check,
  ShieldCheck,
  Gauge,
} from "lucide-react";

interface ProjectSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accentColor: string;
  whatsappPrompt: string;
  deliverables: string[];
}

const SLIDES: ProjectSlide[] = [
  {
    id: "crm",
    tag: "Software de Gestión",
    title: "CRM & Panel Operativo a Medida",
    subtitle: "Centralizá clientes, presupuestos, stock y seguimiento de órdenes en un solo lugar.",
    icon: Layers,
    accentColor: "from-violet-500 to-indigo-500",
    whatsappPrompt:
      "Hola CDByte! Vi la demo del CRM en la web y me gustaría cotizar un sistema de gestión para mi negocio.",
    deliverables: ["Pipeline de Ventas", "Control de Caja y Stock", "Métricas en Vivo", "Multi-usuario"],
  },
  {
    id: "ecommerce",
    tag: "Tienda Online 24/7",
    title: "E-Commerce & Catálogo con Carrito",
    subtitle: "Vendé sin pagar comisiones por venta. Cobros con Mercado Pago y pedidos a WhatsApp.",
    icon: ShoppingBag,
    accentColor: "from-fuchsia-500 to-violet-600",
    whatsappPrompt:
      "Hola CDByte! Vi la demo de E-Commerce en la web y quiero consultar por una tienda online.",
    deliverables: ["Carrito Dinámico", "Mercado Pago / Transferencia", "Panel de Pedidos", "Variantes y Stock"],
  },
  {
    id: "landing",
    tag: "Captación Comercial",
    title: "Landing Page de Alta Conversión",
    subtitle: "Diseñada para transformar visitas en consultas reales de clientes listos para contratar.",
    icon: Globe,
    accentColor: "from-cyan-500 to-blue-600",
    whatsappPrompt:
      "Hola CDByte! Vi la demo de Landing Page y quiero cotizar una página profesional para mis servicios.",
    deliverables: ["Diseño UI/UX Exclusivo", "Carga en < 1 seg", "Botón WhatsApp Directo", "SEO Google"],
  },
  {
    id: "turnos",
    tag: "Agenda Automatizada",
    title: "Sistema de Turnos & Reservas Web",
    subtitle: "Tus clientes eligen día y horario disponible las 24 hs sin llamadas ni mensajes eternos.",
    icon: Calendar,
    accentColor: "from-emerald-500 to-teal-600",
    whatsappPrompt:
      "Hola CDByte! Vi la demo del Sistema de Turnos y me interesa implementarlo en mi negocio.",
    deliverables: ["Agenda en Tiempo Real", "Cobro de Seña Opcional", "Recordatorios", "Panel por Profesional"],
  },
  {
    id: "cotizador",
    tag: "Presupuestos al Instante",
    title: "Cotizador & Calculadora Interactiva",
    subtitle: "El cliente selecciona lo que necesita, conoce un estimado al instante y te contacta calificado.",
    icon: Calculator,
    accentColor: "from-amber-500 to-orange-600",
    whatsappPrompt:
      "Hola CDByte! Vi la demo del Cotizador Interactivo y quiero hacer una calculadora a medida para mi web.",
    deliverables: ["Fórmulas a Medida", "Resumen a WhatsApp", "Captura de Leads", "100% Administrable"],
  },
  {
    id: "rediseno",
    tag: "Modernización Web",
    title: "Rediseño Express & Velocidad 99/100",
    subtitle: "Convertimos tu sitio web antiguo o lento en una plataforma moderna, móvil y ultra veloz.",
    icon: Zap,
    accentColor: "from-rose-500 to-purple-600",
    whatsappPrompt:
      "Hola CDByte! Quiero renovar y acelerar mi página web actual con el servicio de Rediseño Express.",
    deliverables: ["Renovación Visual Total", "Migración a Next.js", "Adaptación Celulares", "Optimización SEO"],
  },
];

export const ProjectCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Estados interactivos internos de las demos
  const [crmPeriod, setCrmPeriod] = useState<"semana" | "mes" | "año">("mes");
  const [cartCount, setCartCount] = useState(2);
  const [selectedSlot, setSelectedSlot] = useState("16:30 hs");
  const [selectedDay, setSelectedDay] = useState("Jue 14");
  const [calcMeters, setCalcMeters] = useState(45);
  const [calcPremium, setCalcPremium] = useState(true);
  const [speedMode, setSpeedMode] = useState<"after" | "before">("after");

  const currentSlide = SLIDES[activeIndex];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 7500);
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
      id="demos"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full max-w-5xl mx-auto mt-12 scroll-mt-28"
    >
      {/* Cabecera del Carrusel de Demos */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 px-1">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-violet-300">
          <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
          <span>Explorá ejemplos interactivos de lo que podemos desarrollar en CDByte:</span>
        </div>

        {/* Controles de flechas + contador */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-mono mr-1">
            0{activeIndex + 1} / 0{SLIDES.length}
          </span>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Proyecto anterior"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Siguiente proyecto"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Selector de Pestañas de Proyectos (Scrollable en móvil) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-3 no-scrollbar">
        {SLIDES.map((slide, idx) => {
          const Icon = slide.icon;
          const isActive = idx === activeIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all shrink-0 ${
                isActive
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-violet-400/50 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "bg-[#0c0e24]/80 text-slate-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{slide.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Marco Principal de la Demo Interactiva */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-b from-violet-500/45 via-purple-500/20 to-white/5 shadow-[0_20px_70px_rgba(139,92,246,0.22)]">
        <div className="w-full bg-[#0a0c1f]/95 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/10">
          {/* Barra superior tipo navegador */}
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

          {/* Cabecera Descriptiva del Proyecto Activo */}
          <div className="px-4 sm:px-6 pt-5 pb-4 border-b border-white/5 bg-gradient-to-r from-violet-950/30 via-transparent to-indigo-950/20 text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1">
                <span>Proyecto Ejemplo #{activeIndex + 1}</span>
                <span>•</span>
                <span>{currentSlide.tag}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{currentSlide.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{currentSlide.subtitle}</p>
            </div>

            {/* Entregables rápidos */}
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

          {/* Escenario Interactivo según el Slide */}
          <div className="p-4 sm:p-6 text-left min-h-[320px] flex flex-col justify-between">
            {/* SLIDE 1: CRM */}
            {currentSlide.id === "crm" && (
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Resumen Operativo en Tiempo Real
                  </span>
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 text-xs">
                    {(["semana", "mes", "año"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setCrmPeriod(p)}
                        className={`px-2.5 py-1 rounded-md capitalize transition-colors ${
                          crmPeriod === p
                            ? "bg-violet-600 text-white font-semibold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Ingresos Registrados</span>
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-2xl font-bold text-white">
                      {crmPeriod === "semana"
                        ? "$1.850.000"
                        : crmPeriod === "mes"
                        ? "$7.420.000"
                        : "$84.900.000"}
                    </p>
                    <span className="text-[11px] text-emerald-400">+24% vs periodo anterior</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Presupuestos Activos</span>
                      <Users className="w-4 h-4 text-violet-400" />
                    </div>
                    <p className="text-2xl font-bold text-white">
                      {crmPeriod === "semana" ? "14" : crmPeriod === "mes" ? "48" : "520"}
                    </p>
                    <span className="text-[11px] text-violet-300">8 pendientes de aprobación</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Órdenes Entregadas</span>
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-2xl font-bold text-white">
                      {crmPeriod === "semana" ? "9" : crmPeriod === "mes" ? "36" : "412"}
                    </p>
                    <span className="text-[11px] text-cyan-300">98% cumplimiento a tiempo</span>
                  </div>
                </div>

                <div className="rounded-xl bg-black/30 border border-white/5 p-3.5 space-y-2">
                  <p className="text-xs font-semibold text-slate-300">Últimos Movimientos del Pipeline</p>
                  {[
                    { client: "Constructora del Sur S.A.", task: "Presupuesto Obra #408", status: "Aprobado", color: "text-emerald-400 bg-emerald-500/10" },
                    { client: "Distribuidora Bahía", task: "Reposición Stock Mensual", status: "En curso", color: "text-amber-300 bg-amber-500/10" },
                    { client: "Estudio Contable V&M", task: "Abono Mantenimiento", status: "Cobrado", color: "text-violet-300 bg-violet-500/10" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-xs py-1.5 border-b border-white/5 last:border-0">
                      <div>
                        <span className="font-medium text-white">{row.client}</span>
                        <span className="text-slate-400 ml-2 hidden sm:inline">• {row.task}</span>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${row.color}`}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SLIDE 2: E-COMMERCE */}
            {currentSlide.id === "ecommerce" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-violet-950/30 border border-violet-500/20 rounded-xl px-4 py-2.5">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-violet-400" />
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Catálogo Interactivo • Probá sumar productos al carrito
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-bold">
                    Carrito ({cartCount})
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {[
                    { name: "Zapatillas Urban Pro", price: "$84.900", badge: "Envío Gratis", stock: "En Stock" },
                    { name: "Campera Impermeable", price: "$112.000", badge: "3 Cuotas s/int", stock: "Últimas 4 u." },
                    { name: "Mochila Notebook Tech", price: "$65.500", badge: "15% OFF Transferencia", stock: "Disponible" },
                  ].map((prod, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between text-[11px] mb-2">
                          <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 font-medium">
                            {prod.badge}
                          </span>
                          <span className="text-emerald-400">{prod.stock}</span>
                        </div>
                        <p className="text-sm font-bold text-white">{prod.name}</p>
                        <p className="text-lg font-extrabold text-violet-300 mt-1">{prod.price}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCartCount((c) => c + 1)}
                        className="mt-3 w-full py-2 rounded-lg bg-white/10 hover:bg-violet-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Agregar al Carrito</span>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CreditCard className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Integrado con Mercado Pago, Tarjetas, Transferencia y Envío a WhatsApp.</span>
                  </div>
                  <span className="text-emerald-400 font-semibold shrink-0">0% Comisión por venta</span>
                </div>
              </div>
            )}

            {/* SLIDE 3: LANDING PAGE */}
            {currentSlide.id === "landing" && (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="md:col-span-3 space-y-3 p-4 rounded-xl bg-gradient-to-br from-slate-900 via-[#0e122e] to-violet-950/40 border border-white/10">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-semibold">
                    Estructura de Alta Conversión (CRO)
                  </span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                    Transformá Búsquedas en Google y Redes en Clientes Reales
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ideal para profesionales, estudios jurídicos/contables, constructoras y empresas de servicios que necesitan proyectar máxima autoridad.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <p className="font-bold text-emerald-400">&lt; 0.8 seg</p>
                      <p className="text-[11px] text-slate-400">Tiempo de carga</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                      <p className="font-bold text-violet-300">100% Móvil</p>
                      <p className="text-[11px] text-slate-400">Diseño adaptable</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Secciones Incluidas:
                  </p>
                  {[
                    "Hero con propuesta de valor clara",
                    "Presentación de Servicios y Diferenciales",
                    "Galería de Proyectos o Casos",
                    "Preguntas Frecuentes y Confianza",
                    "Formulario conectado + Botón WhatsApp",
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SLIDE 4: SISTEMA DE TURNOS */}
            {currentSlide.id === "turnos" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      1. Seleccioná el Día (Interactivo)
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {["Lun 11", "Mar 12", "Mié 13", "Jue 14"].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDay(d)}
                          className={`py-2 px-2 rounded-lg text-xs font-semibold border transition-all ${
                            selectedDay === d
                              ? "bg-emerald-600 text-white border-emerald-400"
                              : "bg-black/40 text-slate-300 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>

                    <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider pt-1">
                      2. Horarios Disponibles
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {["09:30 hs", "11:00 hs", "15:00 hs", "16:30 hs", "18:00 hs", "19:15 hs"].map(
                        (slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`py-1.5 px-2 rounded-lg text-xs font-medium border transition-all ${
                              selectedSlot === slot
                                ? "bg-violet-600 text-white border-violet-400"
                                : "bg-black/40 text-slate-300 border-white/10 hover:border-white/30"
                            }`}
                          >
                            {slot}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 mb-2">
                        <Clock className="w-4 h-4" />
                        Vista Previa de Reserva
                      </span>
                      <p className="text-base font-bold text-white">
                        Turno Seleccionado: {selectedDay} a las {selectedSlot}
                      </p>
                      <p className="text-xs text-slate-300 mt-1">
                        El sistema bloquea el horario automáticamente, envía recordatorio por WhatsApp al cliente y evita ausencias.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs text-slate-300 flex items-center justify-between">
                      <span>Seña opcional por Mercado Pago:</span>
                      <span className="text-emerald-400 font-bold">Activada</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 5: COTIZADOR INTERACTIVO */}
            {currentSlide.id === "cotizador" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-300 uppercase">
                      Simulador de Presupuesto en Vivo
                    </span>
                    <span className="text-xs font-bold text-white bg-amber-500/20 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                      {calcMeters} unidades / m²
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-2">
                      Deslizá para ajustar cantidad o dimensión del trabajo:
                    </label>
                    <input
                      type="range"
                      min={10}
                      max={150}
                      value={calcMeters}
                      onChange={(e) => setCalcMeters(Number(e.target.value))}
                      className="w-full accent-violet-500 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs text-slate-300">Incluir Materiales / Servicio Premium:</span>
                    <button
                      type="button"
                      onClick={() => setCalcPremium(!calcPremium)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                        calcPremium
                          ? "bg-violet-600 text-white border-violet-400"
                          : "bg-black/40 text-slate-400 border-white/10"
                      }`}
                    >
                      {calcPremium ? "Sí, Incluido" : "Estándar"}
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-violet-950/40 to-indigo-950/30 border border-violet-500/30 space-y-2">
                  <p className="text-xs text-violet-300 font-semibold uppercase">
                    Resultado Instantáneo para tu Cliente
                  </p>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">
                    ${((calcMeters * (calcPremium ? 18500 : 12000))).toLocaleString("es-AR")}
                    <span className="text-xs font-normal text-slate-400 ml-1">estimado</span>
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Adaptamos la calculadora a tus precios y fórmulas reales (construcción, aberturas, gráfica, envíos o servicios) para que recibas pedidos listos en tu WhatsApp.
                  </p>
                </div>
              </div>
            )}

            {/* SLIDE 6: REDISEÑO EXPRESS */}
            {currentSlide.id === "rediseno" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-semibold text-slate-300 uppercase">
                    Comparativa de Rendimiento y Conversión
                  </span>
                  <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10 text-xs">
                    <button
                      type="button"
                      onClick={() => setSpeedMode("before")}
                      className={`px-3 py-1 rounded-md transition-all ${
                        speedMode === "before"
                          ? "bg-rose-600 text-white font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Antes (Web Antigua)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpeedMode("after")}
                      className={`px-3 py-1 rounded-md transition-all ${
                        speedMode === "after"
                          ? "bg-emerald-600 text-white font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Después (Web CDByte)
                    </button>
                  </div>
                </div>

                {speedMode === "before" ? (
                  <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-rose-300">Velocidad de Carga</p>
                      <p className="text-2xl font-bold text-rose-400">5.4 seg (Lenta)</p>
                      <p className="text-[11px] text-slate-400 mt-1">El 60% abandona antes de que cargue</p>
                    </div>
                    <div>
                      <p className="text-xs text-rose-300">Experiencia Celular</p>
                      <p className="text-2xl font-bold text-rose-400">Desadaptada</p>
                      <p className="text-[11px] text-slate-400 mt-1">Textos chicos y botones difíciles de tocar</p>
                    </div>
                    <div>
                      <p className="text-xs text-rose-300">Captación de Clientes</p>
                      <p className="text-2xl font-bold text-rose-400">Baja Confianza</p>
                      <p className="text-[11px] text-slate-400 mt-1">Formulario roto o sin conexión a WhatsApp</p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-emerald-300">Velocidad Next.js</p>
                      <p className="text-2xl font-bold text-emerald-400">0.5 seg (99/100)</p>
                      <p className="text-[11px] text-slate-300 mt-1">Carga instantánea en 4G y WiFi</p>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300">Diseño Mobile-First</p>
                      <p className="text-2xl font-bold text-emerald-400">100% Fluido</p>
                      <p className="text-[11px] text-slate-300 mt-1">Navegación cómoda desde cualquier teléfono</p>
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300">Conversión Activa</p>
                      <p className="text-2xl font-bold text-emerald-400">+Consultas Reales</p>
                      <p className="text-[11px] text-slate-300 mt-1">Conectada directo a tu WhatsApp y base de datos</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Barra Inferior de Acción del Proyecto Activo */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Indicadores de punto */}
              <div className="flex items-center gap-2">
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={`Ir al proyecto ${s.title}`}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-7 bg-violet-400"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Botones de acción directa para este proyecto */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 w-full sm:w-auto">
                <a
                  href={getWhatsAppLink(currentSlide.whatsappPrompt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Consultar este Proyecto por WhatsApp</span>
                </a>

                <Link
                  href="#presupuesto"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all"
                >
                  <span>Pedir Presupuesto</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
