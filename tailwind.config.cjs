/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(4)' },
          '100%': { transform: 'scale(1)' },
        },
        animation: {
          scale: 'scale 5s ease-in-out infinite',
        }
      }
    },
  },
  plugins: [],
}