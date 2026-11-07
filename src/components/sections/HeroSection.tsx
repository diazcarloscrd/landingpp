import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Cúpula de resplandor luminosa */}
      <div className="hero-dome-glow" />
      <div className="hero-arch-line" />

      {/* Grid de perspectiva sutil en el fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f204215_1px,transparent_1px),linear-gradient(to_bottom,#1f204215_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Pill Badge Superior */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-medium mb-7 backdrop-blur-md shadow-glow-sm">
          <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0" />
          <span>CDByte • Software a Medida & Desarrollo Digital</span>
        </div>

        {/* Título Principal Orientado a Beneficio */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12] font-display">
          Software y Webs a Medida para{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Vender Más y Ordenar tu Negocio
          </span>
        </h1>

        {/* Subtítulo con Detalle de Productos y Propuesta de Valor */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Diseñamos y programamos soluciones digitales de alto impacto:{" "}
          <strong className="text-white font-semibold">Sistemas CRM</strong>,{" "}
          <strong className="text-white font-semibold">Tiendas E-Commerce</strong> y{" "}
          <strong className="text-white font-semibold">Landing Pages Profesionales</strong>, además de turneros y cotizadores web. Trato directo 1 a 1 sin intermediarios y plazos claros por etapas desde la propuesta.
        </p>

        {/* CTA: 1 Primario + 1 Secundario de Exploración */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto sm:max-w-none">
          <Button
            href="#presupuesto"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            {siteConfig.primaryCta}
          </Button>

          <Button
            href="#demos"
            variant="ghost"
            size="lg"
            icon={<ChevronDown className="w-5 h-5" />}
          >
            Ver demos interactivas
          </Button>
        </div>

        {/* Diferenciales Verificables y Concretos */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/5">
            <UserCheck className="w-4 h-4 text-violet-400 shrink-0" />
            <span>Trato Directo 1 a 1 con el Desarrollador</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Plazos Claros por Etapas desde la Propuesta</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/5">
            <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Código Propio, Seguro y Sin Comisiones</span>
          </div>
        </div>
      </div>
    </section>
  );
};
