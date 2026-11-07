"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "¿Quién es el dueño del código fuente y de la plataforma?",
    a: "El código y la plataforma son 100% tuyos desde el día de la entrega. No retenemos licencias, no cobramos comisiones por tus ventas ni te obligamos a permanecer con nosotros. Te entregamos el repositorio, las credenciales de base de datos y toda la configuración técnica.",
  },
  {
    q: "¿Cómo se gestiona el dominio y el hosting de mi sitio?",
    a: "Depende de las preferencias de cada cliente: si ya contás con tu propio dominio (.com, .com.ar) y servidor, configuramos todo en tu infraestructura. Si preferís no encargarte de aspectos técnicos, te asesoramos para registrarlo a tu nombre o incluimos el hosting de alta velocidad en nuestros planes de mantenimiento.",
  },
  {
    q: "¿Quién se encarga de redactar y cargar los contenidos o productos?",
    a: "El alcance se define claramente en la propuesta inicial: podemos dejar la plataforma con contenido modelo y capacitarte para que cargues tus productos desde un panel intuitivo, o bien encargarnos de la redacción, optimización y carga inicial de tu catálogo completo.",
  },
  {
    q: "¿Cuánto tiempo demora el desarrollo y puesta en marcha?",
    a: "Los plazos se estructuran por etapas claras en la propuesta: una Landing Page profesional suele requerir de 7 a 14 días hábiles, una tienda E-Commerce entre 2 y 4 semanas, y un sistema CRM o software a medida entre 3 y 8 semanas según la cantidad de módulos operativos.",
  },
  {
    q: "¿Puedo administrar mi propio sistema sin conocimientos técnicos?",
    a: "Sí. Diseñamos paneles de administración muy intuitivos donde podés consultar clientes, cambiar precios, actualizar stock y ver estadísticas sin tocar una sola línea de código.",
  },
  {
    q: "¿El sitio funciona correctamente en cualquier teléfono celular?",
    a: "Absolutamente. Todo el desarrollo se realiza bajo estándares Mobile-First estrictos. Probamos en múltiples dispositivos para asegurar una experiencia táctil fluida, botones cómodos y carga ultra rápida.",
  },
  {
    q: "¿Se pueden integrar medios de pago locales como Mercado Pago?",
    a: "Sí. Integramos pasarelas oficiales de Mercado Pago (tarjetas, dinero en cuenta, cuotas), transferencias bancarias directas con confirmación automática y pedidos a WhatsApp.",
  },
  {
    q: "¿Puedo sumar nuevas funciones o módulos más adelante?",
    a: "Sí. Nuestra arquitectura en Next.js y bases de datos relacionales es completamente modular. Podés arrancar con una solución básica e incorporar nuevos módulos, turneros o automatizaciones a medida que tu negocio crezca.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#070817] border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Preguntas Frecuentes"
          badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-violet-400" />}
          title={
            <>
              Resolvemos tus Dudas{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
                Comerciales y Técnicas
              </span>
            </>
          }
          subtitle="Transparencia y claridad total antes de comenzar cualquier desarrollo."
        />

        <div className="space-y-3.5 mb-12">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0d0e24]/80 backdrop-blur-md overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left text-sm sm:text-base font-medium text-white hover:text-violet-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 font-semibold">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-violet-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-violet-300" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Cierre suave */}
        <div className="text-center py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/5 max-w-md mx-auto">
          <p className="text-xs sm:text-sm text-slate-300">
            ¿Tenés alguna otra duda sobre tu caso?{" "}
            <Link
              href="#presupuesto"
              className="font-semibold text-violet-400 hover:text-violet-300 underline underline-offset-4 ml-1 inline-flex items-center gap-1"
            >
              Escribinos tu consulta
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
