// tailwind.config.ts
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
        gooddog: ["GoodDog", "cursive", "sans-serif"],
      },
      keyframes: {
        "bounce-subtle": {
          "0%, 100%": { transform: "translate(-50%, 0)" },
          "50%": { transform: "translate(-50%, -5px)" },
        },
      },
      animation: {
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
