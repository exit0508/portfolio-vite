/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        UDGothic: ["BIZ UDGothic", "sans-serif"],
      },
      gradation: {
        main: "bg-gradient-to-b from-primary from-30% via-pink-400 via-50% to-secondary to-80%",
      },
      colors: {
        primaryShade1: "#F7FFAC",
        primary: "#D5F200",
        primaryHover: "#eefa99",
        primaryHoverDark: "#809100",
        secondary: "#0061FC",
        secondaryHover: "#99fdfd",
        secondaryHoverDark: "#009697",
        warning: "#DE0051",
        bgLight: "#dfdfdf",
        bgDark: "#141414",
        surface200: "#c9c9c9",
        surface400: "#696969",
        surface600: "#242424",
        surface800: "#181818",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
