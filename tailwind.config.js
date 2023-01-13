/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "2rem",
      },
    },
    colors: {
      main: "#4db5ff",
      black: "#000",
      gray: '#ccc',
      white:'#fff',
    },
    extend: {},
  },
  plugins: [],
};
