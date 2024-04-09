/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkerGreen': '#324C3E',
        'darkGreen': '#51714C',
        'lightGreen': '#A2B37F',
        'grey': '#DDDCD7',
        'red': '#B23D3D',
        'darkYellow': '#FFEAC3',
        'lightYellow': '#FEF9DB',
        'orange': '#B86838',
      }
    },
  },
  plugins: [],
}

