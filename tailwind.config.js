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
        mdSize: "120px",
        picSize: "300px",
      },
      colors: {
        text: "#3E3A3A",
        base: "#212121",
        base_: "#ADC2D1",
        text_: "#E0E0E0",
        link: "#00FF88",
      },
      backgroundImage: {
        "theme-pattern": "url('/src/assets/theme.png')",
      },
      fontFamily: {
        pins: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

// font-family: 'Roboto Condensed', sans-serif;
