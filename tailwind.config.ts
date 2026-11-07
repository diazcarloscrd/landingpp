import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#060714",
        surface: {
          DEFAULT: "rgba(18, 19, 42, 0.7)",
          card: "rgba(22, 23, 50, 0.65)",
          hover: "rgba(32, 33, 72, 0.8)",
          subtle: "rgba(25, 27, 56, 0.5)",
        },
        primary: {
          DEFAULT: "#8b5cf6",
          hover: "#7c3aed",
          light: "#a78bfa",
          dark: "#6d28d9",
        },
        accent: {
          cyan: "#38bdf8",
          purple: "#c084fc",
          indigo: "#6366f1",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% -20%, rgba(139, 92, 246, 0.35), transparent 70%)",
        "card-glow": "radial-gradient(circle at top left, rgba(168, 85, 247, 0.15), transparent 60%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(139, 92, 246, 0.25)",
        "glow-md": "0 0 30px rgba(139, 92, 246, 0.35)",
        "glow-lg": "0 0 50px rgba(139, 92, 246, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
