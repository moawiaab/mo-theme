/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    colors: {
      "blue-dark": "#293042",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      black: "#040b1ac4",
      "gray-light": "#d3dce6",
      white: "#fff",
      body: "#f6f8fb",
      dark: "#495057",
      light: "#f0f0f0",
      active : '#1b202be6'
    },
    extend: {},
  },
  plugins: [],
};
