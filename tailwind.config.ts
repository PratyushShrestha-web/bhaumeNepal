import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#0F0F12",
        border: "#1F1F23",
        accent: {
          purple: "#7C3AED",
          blue: "#3B82F6",
        },
        muted: "#A1A1AA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(closest-side, var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        blob: "blob 18s infinite ease-in-out",
        "blob-slow": "blob 26s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 1.5s",
        "gradient-x": "gradient-x 8s ease infinite",
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.8s ease forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "25%": { transform: "translate(40px, -60px) scale(1.1)" },
          "50%": { transform: "translate(-30px, 30px) scale(0.95)" },
          "75%": { transform: "translate(30px, 50px) scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(1deg)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(124, 58, 237, 0.45)",
        "glow-blue": "0 0 80px -20px rgba(59, 130, 246, 0.45)",
        card: "0 8px 40px -12px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
