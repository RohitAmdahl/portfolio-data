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
        mdSize: "100px",
      },

      colors: {
        text: "#3E3A3A",
        base: "#E0D7D7",
        base_: "#ADC2D1",
      },
      backgroundImage: {
        "theme-pattern": "url('/src/assets/theme.png')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
