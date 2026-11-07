import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Globe,
  ShoppingCart,
  Database,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="relative py-24 bg-[#070817] overflow-hidden">
      {/* Luz ambiental */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            Nuestros Pilares Comerciales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tres Soluciones Diseñadas para{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Crecer y Escalar
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Cada empresa tiene un momento diferente. Diseñamos la solución exacta según el objetivo de tu negocio.
          </p>
        </div>

        {/* Grid de Servicios (Estilo tarjetas de referencia con bioluminiscencia) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pilar 1: Landing Pages */}
          <div className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-violet-500/60 transition-all duration-300 flex flex-col">
            <div className="w-full h-full bg-[#0d0f26]/90 backdrop-blur-xl rounded-2xl p-7 flex flex-col justify-between border border-white/5 group-hover:border-violet-500/30">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    Conversión Directa
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  Landing Pages & Webs Profesionales
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Presencia digital convincente y moderna. Diseñada para generar autoridad, destacar tus especialidades y captar consultas de nuevos clientes.
                </p>

                <div className="space-y-3 mb-6">
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    ¿Qué incluye?
                  </p>
                  {[
                    "Diseño UI/UX exclusivo orientado a conversión",
                    "Optimización móvil total y velocidad ultra-rápida",
                    "Conexión directa con WhatsApp y base de datos",
                    "Sección de servicios, metodología y contacto claro",
                    "SEO optimizado para buscadores",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs text-slate-400">
                  <strong className="text-slate-200">Ideal para:</strong> Abogados, contadores, médicos, arquitectos, consultores, empresas de construcción y servicios profesionales.
                </div>
              </div>

              <Link
                href="#presupuesto"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm text-white bg-white/5 hover:bg-violet-600 border border-white/10 hover:border-violet-500 transition-all group/btn"
              >
                <span>Cotizar Landing Page</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pilar 2: E-Commerce */}
          <div className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-violet-500/50 via-purple-500/20 to-transparent hover:from-violet-500 transition-all duration-300 flex flex-col shadow-glow-sm">
            <div className="w-full h-full bg-[#0d0f26]/95 backdrop-blur-xl rounded-2xl p-7 flex flex-col justify-between border border-violet-500/30">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-300 group-hover:scale-110 transition-transform">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-600/30 text-violet-200 border border-violet-400/40">
                    Ventas 24/7
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  E-Commerce & Tiendas Online
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Tu canal de ventas activo las 24 horas. Desde tiendas de indumentaria hasta catálogos interactivos para delivery gastronómico o retiro en tienda.
                </p>

                <div className="space-y-3 mb-6">
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    ¿Qué incluye?
                  </p>
                  {[
                    "Catálogo de productos con variantes (talles, gustos, stock)",
                    "Carrito de compras ágil sin fricciones",
                    "Pasarelas de cobro seguras (Mercado Pago, tarjetas)",
                    "Módulo de envíos, retiros y pedidos automáticos",
                    "Panel administrativo simple para gestionar pedidos",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs text-slate-400">
                  <strong className="text-slate-200">Ideal para:</strong> Locales de indumentaria, gastronomía (sushi, hamburgueserías, panaderías), comercios minoristas y venta de productos.
                </div>
              </div>

              <Link
                href="#presupuesto"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-glow-sm transition-all group/btn"
              >
                <span>Cotizar Tienda Online</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pilar 3: CRM y Software de Gestión */}
          <div className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent hover:from-violet-500/60 transition-all duration-300 flex flex-col">
            <div className="w-full h-full bg-[#0d0f26]/90 backdrop-blur-xl rounded-2xl p-7 flex flex-col justify-between border border-white/5 group-hover:border-violet-500/30">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Control Operativo
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  Sistemas CRM & Software a Medida
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Centralizá toda la operación de tu negocio. Dejá atrás las planillas dispersas y administrá clientes, presupuestos, obras y tareas en un solo panel.
                </p>

                <div className="space-y-3 mb-6">
                  <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    ¿Qué incluye?
                  </p>
                  {[
                    "Pipeline de oportunidades y gestión de clientes",
                    "Seguimiento de presupuestos y estados de cobranza",
                    "Control de stock, materiales o asignación de obras",
                    "Calendario de turnos, vencimientos y recordatorios",
                    "Dashboard gerencial con métricas en tiempo real",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs text-slate-400">
                  <strong className="text-slate-200">Ideal para:</strong> Constructoras, PYMES, inmobiliarias, estudios jurídicos/contables y empresas con flujos operativos propios.
                </div>
              </div>

              <Link
                href="#presupuesto"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm text-white bg-white/5 hover:bg-violet-600 border border-white/10 hover:border-violet-500 transition-all group/btn"
              >
                <span>Cotizar CRM a Medida</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

