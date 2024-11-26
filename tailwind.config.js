/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-5deg, rgba(37, 140, 207, 0.15) 80%, rgba(255, 255, 255, 0.69) 80% )',
      }
    },
  },
  plugins: [],
}