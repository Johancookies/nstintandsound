/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sunkids': ['Sunkids'],
        'lemonmilk-regular': ['Lemonmilk-Regular'],
        'explorer-regular': ['Explorer-Regular'],
        'aeonik-regular': ['Aeonik-Regular'],
      },
    },
  },
  plugins: [],
}

