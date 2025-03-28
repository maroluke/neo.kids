import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      // sans: ["Inter", "sans-serif"],
      // serif: ["Merriweather", "serif"],
      // mono: ["Menlo", "monospace"],
    },
    extend: {},
  },
};

export default config;
