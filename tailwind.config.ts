import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#f7f7f5",
          alt:     "#ffffff",
          dark:    "#0f1f1a",      // тёмно-зелёный (как фон лого)
          mint:    "#eaf8f1",      // нежно-мятный для акцентных секций
        },
        ink: {
          DEFAULT: "#0f1f1a",
          muted:   "#525c58",
          subtle:  "#9aa4a0",
        },
        line: "#e7e7e3",
        mint: {
          DEFAULT: "#7bedb5",       // мятный из лого
          light:   "#a4f3cc",
          dark:    "#1f4d3f",       // тёмно-зелёный фон лого
          ring:    "rgba(123, 237, 181, 0.35)",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "h1": ["clamp(2rem, 4.5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "h2": ["clamp(1.5rem, 2.8vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "h3": ["clamp(1.125rem, 1.6vw, 1.375rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      borderRadius: {
        // Мягкие радиусы, чтобы перекликалось с круглой формой лого
        "soft":  "0.625rem",   // 10px — карточки, инпуты
        "pill":  "9999px",     // кнопки и плашки
      },
      boxShadow: {
        "soft":  "0 1px 2px rgba(15,31,26,0.04), 0 4px 12px rgba(15,31,26,0.04)",
        "lift":  "0 4px 20px rgba(15,31,26,0.08)",
      },
      keyframes: {
        "fade-in":  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "slide-in": { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "fade-in":  "fade-in 0.4s ease forwards",
        "slide-in": "slide-in 0.4s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
