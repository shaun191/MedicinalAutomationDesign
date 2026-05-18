/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          dark: "#09090b",
          panel: "#111113",
          green: "#34d399"
        }
      }
    }
  },
  plugins: []
};
