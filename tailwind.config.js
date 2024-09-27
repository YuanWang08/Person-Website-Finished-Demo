/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f3f81b",
          DEFAULT: "#f3f81b",
          dark: "#FFD700",
        },
        background: {
          light: "#FFFFFF",
          DEFAULT: "#000000",
          dark: "#000000",
        },
      },
      boxShadow: {
        "custom-yellow-big": "0 0 50px 30px rgba(255, 255, 0, 0.7)",
        "custom-yellow-small": "0 0 20px 10px rgba(255, 255, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
