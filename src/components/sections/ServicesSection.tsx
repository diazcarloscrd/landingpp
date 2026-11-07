import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Globe,
  ShoppingCart,
  Database,
  Calendar,
  Calculator,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  UserCheck,
  Clock,
  ShieldCheck,
} from "lucide-react";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  crm: Database,
  ecommerce: ShoppingCart,
  landing: Globe,
  turnos: Calendar,
  cotizador: Calculator,
  rediseno: Zap,
};

export const ServicesSection: React.FC = () => {
  const pillars = siteConfig.services.filter((s) => s.isPillar);
  const extensions = siteConfig.services.filter((s) => !s.isPillar);

  return (
    <section
      id="servicios"
      className="relative py-24 bg-[#060714] border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Servicios Principales"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-violet-400" />}
          title={
            <>
              Soluciones Digitales Pensadas para{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Vender y Gestionar
              </span>
            </>
          }
          subtitle="Desarrollo de software y páginas web orientadas a resultados comerciales y control operativo, adaptadas a los procesos reales de tu empresa."
        />

        {/* 3 Pilares Principales (Tarjetas Grandes) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {pillars.map((srv) => {
            const Icon = SERVICE_ICONS[srv.id] || Globe;
            return (
              <div
                key={srv.id}
                id={`servicio-${srv.id}`}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-violet-500/35 via-white/10 to-transparent hover:from-violet-500/60 transition-all duration-300 flex flex-col scroll-mt-28"
              >
                <div className="w-full h-full bg-[#0c0e26]/95 backdrop-blur-xl rounded-3xl p-7 sm:p-8 border border-white/10 flex flex-col justify-between">
                  <div>
                    {/* Header de la tarjeta */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-violet-600/25 text-violet-200 border-violet-400/40">
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors font-display">
                      {srv.title}
                    </h3>

                    {/* Problema y Solución */}
                    <div className="space-y-3 mb-6 text-xs sm:text-sm">
                      <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-slate-300">
                        <strong className="text-rose-400 block mb-0.5 text-xs uppercase tracking-wide">
                          El Problema:
                        </strong>
                        <p className="text-xs leading-relaxed text-slate-300">{srv.problem}</p>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-slate-300">
                        <strong className="text-emerald-400 block mb-0.5 text-xs uppercase tracking-wide">
                          Nuestra Solución:
                        </strong>
                        <p className="text-xs leading-relaxed text-slate-300">{srv.solution}</p>
                      </div>
                    </div>

                    {/* Beneficios / Features */}
                    <div className="space-y-2.5 mb-6">
                      <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Capacidades clave incluidas:
                      </p>
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-6 text-xs text-slate-400">
                      <strong className="text-slate-200">Ideal para:</strong> {srv.idealFor}
                    </div>
                  </div>

                  {/* Único enlace por tarjeta: exploración hacia la demo interactiva */}
                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href="#demos"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-violet-300 hover:text-white transition-colors group/link"
                    >
                      <span>Ver demo en funcionamiento</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fila Secundaria: "También desarrollamos" (Tarjetas compactas) */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Extensiones y Herramientas Especializadas
            </span>
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extensions.map((srv) => {
              const Icon = SERVICE_ICONS[srv.id] || Globe;
              return (
                <div
                  key={srv.id}
                  id={`servicio-${srv.id}`}
                  className="rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-violet-500/40 transition-all flex flex-col scroll-mt-28"
                >
                  <div className="w-full h-full bg-[#0a0c20]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border bg-white/5 text-slate-300 border-white/10">
                          {srv.badge}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white mb-2 font-display">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {srv.solution}
                      </p>

                      <div className="space-y-1.5 mb-4">
                        {srv.features.slice(0, 3).map((f, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <Link
                        href="#demos"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors group/link"
                      >
                        <span>Ver demo interactiva</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Suave de exploración al Estimador */}
        <div className="text-center py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/5 max-w-xl mx-auto mb-16">
          <p className="text-xs sm:text-sm text-slate-300">
            ¿No estás seguro de cuál es la mejor opción para tu negocio?{" "}
            <Link
              href="#estimador"
              className="font-semibold text-violet-400 hover:text-violet-300 underline underline-offset-4 ml-1 inline-flex items-center gap-1"
            >
              Probá el estimador de proyectos
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

        {/* Bloque Diferencial: Trato Directo 1 a 1 */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-violet-500/30 via-emerald-500/20 to-indigo-500/30">
          <div className="bg-[#0b0d22]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Por qué elegir CDByte</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  Trato Directo 1 a 1, Sin Intermediarios y Plazos Claros
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  En lugar de pasar por ejecutivos de cuentas comerciales o esperar semanas por un presupuesto, hablás directamente con el desarrollador que programa tu plataforma. Definimos el alcance por etapas desde el inicio, con comunicación directa y código propio de alta calidad.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Plazos Claros por Etapas</p>
                    <p className="text-xs text-slate-400">Entregables funcionales visibles desde la propuesta.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Atención 1 a 1 sin Relleno</p>
                    <p className="text-xs text-slate-400">Trato transparente y directo con quien programa.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Código Seguro y Propio</p>
                    <p className="text-xs text-slate-400">Sin ataduras ni comisiones por ventas en tu negocio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
