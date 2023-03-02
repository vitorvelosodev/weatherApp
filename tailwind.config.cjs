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
      dropShadow: {
        'app': '0 35px 35px rgba(0, 0, 0, 0.35)',
      },
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
        },
        revealUp: {
          '0%': { transform: 'translateY(10%)' , opacity: '0'},
          '100%': { transform: 'translateY(0%)' , opacity: '1' },
        }
      },
      animation: {
        scrolling: 'scrolling 15s linear infinite',
        scrollingDelay: 'scrollingDelay 18s 3500ms linear infinite',
        revealUp: 'revealUp 500ms ease-out'
      }
    },
    fontFamily: {
      'custom': ['Raleway', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}