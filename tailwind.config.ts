import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js}"],
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
