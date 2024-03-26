/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/tugas6/**/*.{js,jsx,ts,tsx}",
    "./src/tugas7/**/*.{js,jsx,ts,tsx}",
    "./src/tugas8/**/*.{js,jsx,ts,tsx}",
    "./src/tugas9/**/*.{js,jsx,ts,tsx}",
    "./src/tugas10/**/*.{js,jsx,ts,tsx}",
    "./src/tugas12/**/*.{js,jsx,ts,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

