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
        // Нейтральная серая палитра — фон сайта
        bg: {
          DEFAULT: "#f5f5f4",   // светло-серый основной фон
          alt:     "#ffffff",   // белый для карточек
          dark:    "#0a0a0a",   // почти-чёрный для футера/CTA
        },
        ink: {
          DEFAULT: "#0a0a0a",   // основной текст
          muted:   "#525252",   // вторичный
          subtle:  "#a3a3a3",   // подписи
        },
        line: "#e5e5e5",         // границы
        // Мятный акцент MILADA
        mint: {
          DEFAULT: "#5ef0b0",
          light:   "#8ff5c5",
          dark:    "#2ed494",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "h1": ["clamp(2.25rem, 5vw, 4rem)",  { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "h2": ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "h3": ["clamp(1.25rem, 2vw, 1.5rem)",   { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
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
