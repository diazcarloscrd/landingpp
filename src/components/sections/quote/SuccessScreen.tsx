import React from "react";
import { getWhatsAppLink } from "@/config/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { CheckCircle2, RotateCcw } from "lucide-react";

interface SuccessScreenProps {
  leadId: string;
  name: string;
  onReset: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({
  leadId,
  name,
  onReset,
}) => {
  const whatsappMsg = `Hola CDByte! Envié una solicitud de presupuesto a nombre de ${name} (Ref: ${leadId}).`;

  return (
    <div className="text-center py-12 px-4 sm:px-8 space-y-6 max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-300">
      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
          ¡Solicitud Recibida con Éxito!
        </h3>
        <p className="text-sm sm:text-base text-slate-300">
          Gracias, <strong className="text-white">{name}</strong>. Tu requerimiento quedó registrado en nuestro sistema de forma segura.
        </p>
      </div>

      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-1">
        <p className="text-slate-400">Identificador de tu solicitud:</p>
        <p className="font-mono text-violet-300 font-bold text-sm tracking-wider">{leadId}</p>
        <p className="text-[11px] text-slate-400 pt-1">
          Analizaremos tu requerimiento y nos pondremos en contacto a la brevedad con una propuesta formal.
        </p>
      </div>

      {/* Única salida a WhatsApp permitida del formulario */}
      <div className="pt-2 space-y-3">
        <a
          href={getWhatsAppLink(whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 hover:border-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:text-white active:scale-95 w-full sm:w-auto"
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
          <span>Si preferís agilizar, escribinos por WhatsApp</span>
        </a>

        <div>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors pt-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Enviar otra consulta</span>
          </button>
        </div>
      </div>
    </div>
  );
};
