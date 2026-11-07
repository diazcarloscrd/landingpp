import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { InteractiveDashboard } from "@/components/interactive/InteractiveDashboard";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Code2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Cúpula de resplandor luminosa idéntica a la imagen de referencia */}
      <div className="hero-dome-glow" />
      <div className="hero-arch-line" />

      {/* Grid de perspectiva sutil en el fondo */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f204215_1px,transparent_1px),linear-gradient(to_bottom,#1f204215_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Pill Badge Superior de la referencia */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-glow-sm">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>Soluciones Digitales de Alto Rendimiento para Negocios</span>
        </div>

        {/* Título Principal de Impacto */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Impulsamos tu Negocio con{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Software, E-Commerce y CRM
          </span>{" "}
          a Medida
        </h1>

        {/* Subtítulo y Propuesta de Valor */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          No solo creamos páginas: desarrollamos plataformas operativas que ordenan tus clientes, automatizan tus procesos de venta y convierten visitantes en oportunidades comerciales reales.
        </p>

        {/* Botones de Llamada a la Acción (CTA) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#presupuesto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <span>Solicitar Presupuesto</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="#servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-200"
          >
            <span>Explorar Servicios</span>
          </Link>
        </div>

        {/* Micro-diferenciales en el Hero */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-violet-400" />
            <span>Desarrollo Ágil y 100% Personalizado</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Código Seguro y Arquitectura Escalable</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Sin Dependencia de Plantillas Genéricas</span>
          </div>
        </div>

        {/* Dashboard Interactivo Flotante (Mockup de la referencia) */}
        <InteractiveDashboard />
      </div>
    </section>
  );
};

