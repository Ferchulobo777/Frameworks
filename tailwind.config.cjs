/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      dropShadow: {
      '4xl': '10px 35px 35px rgba(255, 255, 255, 0.25)'
      }
    },
  },
  plugins: [],
}