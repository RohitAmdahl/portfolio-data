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
        picSize: "330px",
      },
      colors: {
        text: "#3E3A3A",
        base: "#212121",
        base_: "#ADC2D1",
        text_: "#E0E0E0",
        link: "#00FF88",
        red: "#A71666",
        backgroundColor: "#DCF2F1",
      },
      backgroundImage: {
        pattern: "url('/src/assets/theme.png')",
        pic: "url('/src/assets/bg.png')",
      },
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
        sixtyfour: ["Sixtyfour", "sans-serif"],
        philosopher: ["'Philosopher'", "sans-serif"],
        workbench: ["'Workbench'", "sans-serif"],
      },
      boxShadow: {
        shadow: "2px 3px 4px 1px",
      },
      colors: {
        primary: "#413C3C",
        secondary: "#2E2A2A",
        textColor: "#CFCFCF",
        link: "#FFFCB5",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

// font-family: 'Roboto Condensed', sans-serif;
