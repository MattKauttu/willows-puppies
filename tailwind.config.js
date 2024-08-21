/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif']
      },
      colors: {
        male: '#007BFF',
        female: '#FF69B4'
      }
    },
  },
  plugins: [],
}

