/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      screens:{
        "other": {'min': '340px', 'max': '1200px'},
      },
      colors:{
        darkbg:"#1E293B"
      }
    },
  },
  plugins: [],
}
