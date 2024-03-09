/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'peach': '#F4DBDB',
      'orange': '#E68C00',
      'sea': '#94B6EF',
      'night': '#5E3D9B',
      'white': '#FFFFFF'
    }, 
    fontFamily: {
      "shrikhand": ['Shrikhand', 'slab-serif'],
      "rokkitt": ['Rokkitt', 'slab-serif']
    }, 
    extend: {
    },
  },
  plugins: [],
}

