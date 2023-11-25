import type { Config } from "tailwindcss";

const fontFallbacks = [
  "Inter",
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "sans-serif",
];

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "var(--brand-color-100)",
          200: "var(--brand-color-200)",
          300: "var(--brand-color-300)",
          400: "var(--brand-color-400)",
          500: "var(--brand-color-500)",
          600: "var(--brand-color-600)",
          700: "var(--brand-color-700)",
          800: "var(--brand-color-800)",
          900: "var(--brand-color-900)",
          1000: "var(--brand-color-1000)",
        },
        background: "var(--background-color)",
      },
      fontFamily: {
        sans: fontFallbacks,
        brand: ["Inconsolata", ...fontFallbacks],
        expanded: ["InconsolataExpanded", ...fontFallbacks],
      },
    },
  },
  plugins: [],
};
export default config;
