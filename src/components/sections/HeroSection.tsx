import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ProjectCarousel } from "@/components/interactive/ProjectCarousel";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  UserCheck,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Cúpula de resplandor luminosa */}
      <div className="hero-dome-glow" />
      <div className="hero-arch-line" />

      {/* Grid de perspectiva sutil en el fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f204215_1px,transparent_1px),linear-gradient(to_bottom,#1f204215_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Pill Badge Superior */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-medium mb-7 backdrop-blur-md shadow-glow-sm">
          <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0" />
          <span>CDByte • Desarrollo de Software y Webs Comerciales a Medida</span>
        </div>

        {/* Título Principal de Impacto */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Impulsamos tu Negocio con{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Webs, E-Commerce, Turneros y CRM
          </span>{" "}
          a Medida
        </h1>

        {/* Subtítulo y Propuesta de Valor */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Desarrollamos plataformas rápidas y listas para vender: desde{" "}
          <strong className="text-white font-semibold">Landing Pages</strong> y{" "}
          <strong className="text-white font-semibold">Tiendas Online</strong> hasta{" "}
          <strong className="text-white font-semibold">Sistemas de Gestión, Turnos y Cotizadores</strong>. Trato directo 1 a 1 sin intermediarios y entregas en días.
        </p>

        {/* Botones de Llamada a la Acción (CTA) */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto sm:max-w-none">
          <Link
            href="#presupuesto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.7)] transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <span>Solicitar Presupuesto</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 hover:border-emerald-400 backdrop-blur-md transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <WhatsAppIcon className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Hablar por WhatsApp</span>
          </a>

          <Link
            href="#calculadora"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 backdrop-blur-md transition-all duration-200"
          >
            <span>Estimar en 1 Minuto</span>
          </Link>
        </div>

        {/* Micro-diferenciales en el Hero (Incluye Diferencial 1 a 1) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            <UserCheck className="w-4 h-4 text-violet-400 shrink-0" />
            <span>Trato Directo 1 a 1 con el Desarrollador</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Entregas Ágiles Asistidas por IA</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Código Propio, Escalable y Seguro</span>
          </div>
        </div>

        {/* Carrusel Interactivo de Proyectos y Demos */}
        <ProjectCarousel />
      </div>
    </section>
  );
};
