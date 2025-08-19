/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'homepage-1': '#2C7FBF',
        'homepage-2': '#DD3B30',
        'homepage-3': '#D6932C',
        'homepage-4': '#8F2B8F',
        'footer-top': '#8F2B8F',
      },
    },
  },
  plugins: [],
}