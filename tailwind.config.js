/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F44336",
          dark: "#f3f81b",
          DEFAULT: "#f3f81b",
        },
        background: {
          light: "#EEEEEE",
          dark: "#000000",
          DEFAULT: "#000000",
        },
        word: {
          light: "#000000",
          dark: "#FFFFFF",
          DEFAULT: "#FFFFFF",
        },
      },
      boxShadow: {
        "primary-big": "0 0 50px 30px theme('colors.primary.light')",
        "primary-big-dark": "0 0 50px 30px theme('colors.primary.dark')",
        "primary-small": "0 0 20px 10px theme('colors.primary.light')",
        "primary-small-dark": "0 0 20px 10px theme('colors.primary.dark')",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-shadow-custom": {
          "text-shadow": `0 0 25px ${theme("colors.primary.light")}`,
        },
        ".dark .text-shadow-custom": {
          "text-shadow": `0 0 25px ${theme("colors.primary.dark")}`,
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
