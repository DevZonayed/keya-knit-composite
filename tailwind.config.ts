import type { Config } from "tailwindcss";

/**
 * Design tokens mirror design/index.html :root variables so Tailwind utilities
 * and the ported component CSS in globals.css share one source of truth.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C2436",
        navy: {
          50: "#E7EDF1",
          600: "#123A54",
          800: "#0A1E2E",
        },
        green: {
          50: "#E4F3EA",
          500: "#1E9E5C",
          600: "#137A47",
          700: "#0F633A",
        },
        paper: "#FAFAF7",
        slate: {
          DEFAULT: "#5A6B76",
        },
        border: "#E2E6E9",
        amber: {
          50: "#FBF1DD",
          600: "#8A5A0E",
        },
        danger: "#B42318",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        ui: ["var(--font-ui)", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "10px",
        btn: "8px",
        img: "12px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(12,36,54,.06)",
        md: "0 6px 20px -8px rgba(12,36,54,.14)",
        lg: "0 20px 50px -20px rgba(12,36,54,.28)",
      },
      maxWidth: {
        wrap: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
