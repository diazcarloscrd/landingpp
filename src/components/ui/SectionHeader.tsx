import React from "react";

export interface SectionHeaderProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } mb-14 md:mb-16 ${className}`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/70 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-3.5 backdrop-blur-md ${
          isCenter ? "justify-center" : ""
        }`}
      >
        {badgeIcon && <span className="shrink-0">{badgeIcon}</span>}
        <span>{badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
