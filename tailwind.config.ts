import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./types/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        novalis: {
          orange: "#E88001",
          yellow: "#FFB800",
          black: "#050505",
          dark: "#121212",
          charcoal: "#0B0B0B",
        },
      },
      boxShadow: {
        glow: "0 0 24px rgba(232, 128, 1, 0.35)",
        "glow-strong": "0 0 40px rgba(255, 255, 63, 0.45)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateX(-120%)", opacity: "0" },
          "30%": { opacity: "0.65" },
          "60%": { opacity: "0.3" },
          "100%": { transform: "translateX(120%)", opacity: "0" },
        },
        "gradient-glow": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.04)" },
        },
      },
      animation: {
        scan: "scan 3.8s ease-in-out infinite",
        glow: "gradient-glow 5s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(232, 128, 1, 0.18), transparent 55%)",
        "grid-fade":
          "linear-gradient(to bottom, rgba(5,5,5,0) 0%, rgba(5,5,5,0.9) 65%, rgba(5,5,5,1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
