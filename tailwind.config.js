module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#0c0c0c", "900_28": "#00000028" },
        gray: { 300: "#e5dfd9", 900: "#141414" },
        green: { 500: "#2ec14e" },
      },
      fontFamily: {
        encodesans: "Encode Sans",
        comme: "Comme",
        raleway: "Raleway",
      },
      boxShadow: { bs: "0px 2px  16px 0px #00000028" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
