const plugin = require('tailwindcss/plugin')

/** @type {import("tailwindcss").Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "380px",
        "sm": "600px",
        "md": "800px",
        "lg": "1100px",
        "xl": "1366px",
        "2xl": "1600px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      colors: {
        dark: "#242424",
        light: "#c9d1d9",
        primary: "#58a6ff",
        highlight: "#3fb950",
        border: "#21262d",
        secondaryText: "#8b949e",
        activeElement: "#2ea043",
        link: "#58a6ff",
        error: "#f85149",
      },
    },
  },
  plugins: [],
};
