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
  plugins: [],
}