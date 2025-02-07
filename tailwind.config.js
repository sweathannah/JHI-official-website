/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': 'clamp(2.5rem, 4.5vw, 3.25rem)',
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        '.all-unset': {
          all: 'unset',
        },
        'scrollbar-none': {
          scrollbarWidth: 'none',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}