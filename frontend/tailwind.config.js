/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'peach': '#F4DBDB',
      'orange': '#EFA651',
      'sea': '#94B6EF',
      'night': '#5E3D9B',
      'white': '#FFFFFF',
      'black': '#000000'
    }, 
    fontFamily: {
      "shrikhand": ['Shrikhand', 'slab-serif'],
      "rokkitt": ['Rokkitt', 'slab-serif'], 
      "ubuntu": ['Ubuntu', 'sans-serif'],
      "caprasimo": ['Caprasimo', 'slab-serif']
    }, 
    extend: {
    },
  },
  plugins: [],
}

