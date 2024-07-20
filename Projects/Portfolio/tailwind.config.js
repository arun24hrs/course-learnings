/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors:{
        theme: {
          10: '#eae2b7',
        20: '#fcbf49',
        30: '#f77f00',
        40: '#d62828',
        45: '#003049'
        }
      },
      animation: {
        scaleup: 'scaleup 1s ease-in-out',
      },
      keyframes:{
        scaleup: {
          '0%': { transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(100deg)'}
        }
      }
    },
  },
  plugins: [],
}

