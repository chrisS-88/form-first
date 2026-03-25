import base from "pennine-design-system/base/tailwind.base.js";
import minimal from "pennine-design-system/motion/minimal.js";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [base, minimal],
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "#D7FF00",
        secondary: "#FF4D00",
        accent: "#CBAC04",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
