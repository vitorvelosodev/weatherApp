/* eslint-disable no-undef */
/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'custom': '820px',
    },
    extend: {
      keyframes: {
        scrolling: {
          '0%': { translate: '-100%', opacity: '0' },
          '50%': { opacity: '0.1' },
          '100%': { translate: '100%', opacity: '0' },
        },
        scrollingDelay: {
          '0%': { translate: '-100%', opacity: '0' },
          '50%': { opacity: '0.08' },
          '100%': { translate: '100%', opacity: '0' },
        }
      },
      animation: {
        scrolling: 'scrolling 15s linear infinite',
        scrollingDelay: 'scrollingDelay 18s 3500ms linear infinite',
      }
    },
    fontFamily: {
      'custom': ['Raleway', 'sans-serif'],
    },
  },
  plugins: [],
}