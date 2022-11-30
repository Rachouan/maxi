/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      heading: ["maxi-font", "system-ui", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      body: ["system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#e9cdff",
          100: "#d39cff",
          200: "#be6bff",
          300: "#a83aff",
          400: "#9309FF",
          500: "#7507cc",
          600: "#580599",
          700: "#3a0366",
          800: "#1d0132",
          900: "#0e0019",
        },
        light: {
          50: "#f4fff6",
          100: "#eaffed",
          200: "#dfffe4",
          300: "#d5ffdb",
          400: "#CBFFD3",
          500: "#a6ffad",
          600: "#80ff87",
          700: "#5aff61",
          800: "#34ff3b",
          900: "#1aff1a",
        },
      },
    },
  },
  plugins: [],
};
