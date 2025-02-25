import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      // articles, p-tags
      sans: ["var(--font-grotesque)"],
      // Menu, Titles
      mono: ["var(--font-climate)"],
      // Heading, Subsites
      subsites: ["var(--font-anton)"],
    },
    extend: {
      fontSize: {
        clampPart2: "clamp(3.25rem, -0.7273rem + 16.9697vw, 12rem)",
        clampPart3: "clamp(0.75rem, 0.2955rem + 1.9394vw, 1.75rem)",
        clampTitles: "clamp(1.5rem, 0.9718rem + 2.2535vw, 3rem)",
      },
      margin: {
        // doesnt work
        subTitleImgMR: "calc(clampTitles*2)",
        subTitleTxtT: "calc(clampTitles*4)",
      },
      colors: {
        sub1: "#13aaff",
        sub2: "#c23e3e",
        sub3: "#9747ff",
        sub4: "#f9ac37",
        background: "#f8f6ed",
      },
      height: {
        sns: "calc(2rem * 2 + 0.5rem)",
      },
      width: {
        sns: "calc(2rem * 2 + 0.5rem)",
      },
      animation: {
        partsUp: "partsUp 0.75s cubic-bezier(0.63, 0.25, 0.4, 0.91) forwards",
        partsDown:
          "partsDown 0.75s cubic-bezier(0.63, 0.25, 0.4, 0.91) forwards",
      },
      keyframes: {
        partsUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        partsDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      transitionDuration: {
        "750": "750ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
