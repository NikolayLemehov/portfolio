/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "screens": {
        "xs": "380px",
        "sm": "600px",
        "md": "800px",
        "lg": "1100px",
        "xl": "1366px",
        "2xl": "1600px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};
