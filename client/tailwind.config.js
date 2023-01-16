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
      main2: "rgba(77, 181, 255, 0.6)",
      black: "#000",
      gray: "#ccc",
      white: "#fff",
    },
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
};
