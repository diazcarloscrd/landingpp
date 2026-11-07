import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_24px_rgba(139,92,246,0.45)] hover:shadow-[0_0_34px_rgba(139,92,246,0.65)] border border-violet-400/30 focus-visible:ring-violet-400",
  secondary:
    "text-slate-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 hover:border-violet-500/40 backdrop-blur-md focus-visible:ring-violet-400",
  ghost:
    "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 focus-visible:ring-violet-400",
  whatsapp:
    "text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/35 hover:border-emerald-400 backdrop-blur-md hover:text-white shadow-[0_0_20px_rgba(16,185,129,0.25)] focus-visible:ring-emerald-400",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs font-semibold rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl gap-2",
  lg: "px-7 py-3.5 text-sm sm:text-base font-bold rounded-full gap-2.5",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  children,
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer select-none";

  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-disabled={disabled}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
