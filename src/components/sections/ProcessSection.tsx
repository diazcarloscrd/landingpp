import React from "react";
import { Sparkles, CheckCircle, Clock, FileText, Code2, HeadphonesIcon, Rocket } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Relevamiento & Necesidad",
      desc: "Escuchamos tu objetivo, analizamos tu modelo de negocio y detectamos los cuellos de botella en ventas o administración.",
      icon: FileText,
    },
    {
      num: "02",
      title: "Propuesta & Alcance Claro",
      desc: "Elaboramos un presupuesto detallado con funcionalidades exactas, plazos por etapas y costos transparentes sin sorpresas.",
      icon: CheckCircle,
    },
    {
      num: "03",
      title: "Diseño UI/UX & Prototipado",
      desc: "Creamos la interfaz visual personalizada (paleta, tipografías, flujos y versión móvil) adaptada a la identidad de tu marca.",
      icon: Sparkles,
    },
    {
      num: "04",
      title: "Desarrollo & Lógica Segura",
      desc: "Programamos frontend y backend con estándares de alto rendimiento, bases de datos seguras e integraciones de pago o WhatsApp.",
      icon: Code2,
    },
    {
      num: "05",
      title: "Pruebas & Control de Calidad",
      desc: "Auditamos la velocidad de carga, la seguridad, la usabilidad en celulares y el correcto procesamiento de pedidos o solicitudes.",
      icon: Clock,
    },
    {
      num: "06",
      title: "Puesta en Marcha & Soporte",
      desc: "Lanzamos tu solución en producción, te capacitamos en su uso y te brindamos soporte continuo para que tu sistema crezca.",
      icon: Rocket,
    },
  ];

  return (
    <section id="proceso" className="relative py-24 bg-[#070817] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            Metodología Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Cómo Llevamos Tu Proyecto del{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Papel a la Realidad
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Un proceso ágil y profesional con comunicación constante. Sabés exactamente en qué etapa se encuentra tu desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-violet-500/50 transition-all duration-300"
              >
                <div className="w-full h-full bg-[#0c0d22]/90 backdrop-blur-xl rounded-2xl p-7 border border-white/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-violet-500/40 group-hover:text-violet-400 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

