import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowLeft, Shield, Code2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Aviso de Privacidad | ${siteConfig.name}`,
  description: `Política y aviso de privacidad para el tratamiento de solicitudes y datos en ${siteConfig.name}.`,
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#060714] text-slate-200">
      {/* Encabezado simple */}
      <header className="border-b border-white/10 bg-[#070817]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white font-bold text-lg hover:text-violet-300 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span>{siteConfig.name}</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5 text-violet-400" />
            <span>Transparencia y Seguridad</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Aviso de Privacidad y Tratamiento de Datos
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Última actualización: Noviembre 2026
          </p>
        </div>

        <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20 text-xs text-violet-200 leading-relaxed">
          <strong>Aviso preliminar:</strong> El presente documento describe de forma clara y transparente el tratamiento técnico real que realizamos con los datos enviados a través del formulario de este sitio web. No constituye asesoramiento legal formal ni sustituye dictámenes de profesionales en derecho.
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">1. Responsable del Tratamiento</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            El responsable de la recepción y procesamiento de los datos es <strong className="text-white">{siteConfig.legalName}</strong> ({siteConfig.name}), con atención técnica directa en Argentina. Podés contactarnos en cualquier momento a través del correo electrónico{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-violet-400 underline">
              {siteConfig.contact.email}
            </a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">2. Datos que Recolectamos</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A través de nuestro formulario de solicitud de presupuesto recopilamos exclusivamente:
          </p>
          <ul className="list-disc list-inside text-sm text-slate-300 space-y-1.5 pl-2">
            <li><strong className="text-white">Nombre y apellido</strong> (para dirigirnos a vos de forma personalizada).</li>
            <li><strong className="text-white">Correo electrónico</strong> (obligatorio, para enviar la propuesta o presupuesto).</li>
            <li><strong className="text-white">Teléfono / WhatsApp</strong> (opcional, por si preferís coordinación ágil por chat).</li>
            <li><strong className="text-white">Nombre de tu empresa o actividad</strong> (opcional, para contextualizar el análisis).</li>
            <li><strong className="text-white">Detalle de tu proyecto o requerimiento</strong> (descripción técnica y necesidades).</li>
            <li><strong className="text-white">Rango de presupuesto y plazo orientativos</strong> (para adaptar la propuesta a tu escala).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">3. Finalidad del Tratamiento</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Los datos enviados se utilizan con la <strong className="text-white">única finalidad de evaluar tu solicitud</strong>, analizar la factibilidad del desarrollo digital solicitado y enviarte una propuesta de cotización y alcance.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">No vendemos, no transferimos ni cedemos</strong> tus datos personales a bases de datos de terceros ni a agencias de marketing externas. No realizamos envíos masivos de spam ni comunicaciones ajenas a la cotización solicitada.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">4. Almacenamiento, Infraestructura y Seguridad</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            La información se almacena de forma persistente y protegida en una base de datos relacional PostgreSQL provista por <strong className="text-white">Supabase</strong>. Contamos con políticas de seguridad a nivel de filas (Row Level Security - RLS) que impiden el acceso público o no autorizado a los registros. Las inserciones se realizan exclusivamente desde el backend autenticado de la aplicación.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Asimismo, utilizamos notificaciones internas al equipo responsable mediante bot privado de Telegram para acusar recibo inmediato de las solicitudes entrantes, sin exponer tus datos a canales públicos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white font-display">5. Ejercicio de Derechos (Acceso, Rectificación y Supresión)</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Tenés derecho a solicitar en cualquier momento la confirmación de si tus datos están registrados, acceder a ellos, rectificarlos o solicitar su eliminación total de nuestra base de datos.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Para ejercer estos derechos, simplemente envianos un correo electrónico a{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-violet-400 font-semibold underline">
              {siteConfig.contact.email}
            </a>{" "}
            indicando tu nombre y la solicitud de baja. Procesaremos tu pedido de forma inmediata y sin trabas.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-violet-400 hover:text-violet-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la página principal</span>
          </Link>
          <span className="text-xs text-slate-500">© {new Date().getFullYear()} {siteConfig.name}</span>
        </div>
      </main>
    </div>
  );
}
