/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B1113",
        "primary-light": "#7911124d",
        secondary: "#E6483D",
        third: "#F2AE40",
        black: "#18181B",
        "white-100": "#FFFFFF1A",
        "white-200": "#FFFFFF33",
        "white-600": "#FFFFFF99",
        "soft-200": "#E4E4E7",
        "soft-400": "#A1A1A9",
        "red-base": "#DF1C41",
        "purple-lighter": "#EEEBFF",
        "orange-lighter": "#FEF3EB",
        weak: {
          100: "#F4F4F5",
        },
        "neutral-300": "#D4D4D8",
        sub: { 500: "#717179" },
        "sh-sm": "#1B1C1D0A",
      },

      gray: {
        50: "#FAFAFA",
      },

      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("@tailwindcss/forms")],
};
