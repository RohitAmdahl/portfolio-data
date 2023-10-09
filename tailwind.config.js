/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "420px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      maxWidth: {
        size: "10rem",
        small: "30px",
        mdSmall: "35px",
        mdSize: "140px",
      },
      backgroundColor: {
        dark: "#6F6B6B",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
