/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./styles/**/*.{css,scss,sass}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        violet: {
          500: "#6B46C1",
        },
      },
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1000px",
    //   xl: "1200px",
    //   "2xl": "1280px",
    // },
  },
  plugins: [],
};
