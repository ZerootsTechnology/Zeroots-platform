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
        primary: "#141B45",
        secondary: "#1E2761",
        accent: "#F2A900",
        lightblue: "#CADCFC",
        surface: "#F4F6FB",
        textPrimary: "#1A1A1A",
        textSecondary: "#6B7280",
        success: "#2F9E5B",
        warning: "#F59E0B",
        danger: "#C1443C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;