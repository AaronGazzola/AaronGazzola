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
    "./UI/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontSize: {
        xxl: "1.7rem",
        xxxl: "2rem",
      },
      fontFamily: {
        sans: fontFallbacks,
        brand: ["Source Sans Pro", ...fontFallbacks],
      },
    },
  },
  plugins: [],
};
export default config;
