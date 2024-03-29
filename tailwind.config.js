/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#746E61",
        second: "#332E24",
        third: "#1A1712",
        fourth: "#524842",
        white: "#FFFFFF",
        fifth: "#2c261b",
        orangei: "#975923",
        orangeii: "#ed7710",
      },
      backgroundImage: {
        bgone: "url('./src/assets/bgg.png')",
      },
      height: {
        one: "10%",
        two: "20%",
        nine: "90%",
      },
    },
  },
  plugins: [],
};
