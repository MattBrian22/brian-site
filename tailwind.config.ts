import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "Courier New", "monospace"],
        sans: ["DM Sans", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0a",
        paper: "#f5f4f0",
        muted: "#6b6b6b",
        rule: "#d4d0c8",
        accent: "#1a1a1a",
        red: "#c0392b",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
