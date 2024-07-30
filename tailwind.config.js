/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'ocean': '#00fbff',
      },
      screens: {
        'pc': '1920px',
      }
    },
  },
  plugins: [],
}

