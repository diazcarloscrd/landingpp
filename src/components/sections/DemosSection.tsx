import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCarousel } from "@/components/interactive/ProjectCarousel";
import { Sparkles } from "lucide-react";

export const DemosSection: React.FC = () => {
  return (
    <section
      id="demos"
      className="relative py-24 bg-[#070817] border-t border-white/5 overflow-hidden scroll-mt-20"
    >
      {/* Luz ambiental sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Demos Interactivas"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-violet-400" />}
          title={
            <>
              Explorá Nuestras Soluciones{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                en Funcionamiento
              </span>
            </>
          }
          subtitle="Probá las interfaces de CRM, tiendas virtuales, landing pages y sistemas de turnos con datos de demostración interactivos."
        />

        <ProjectCarousel />
      </div>
    </section>
  );
};
