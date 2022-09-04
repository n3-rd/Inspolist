/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

"primary": "#292524",

"secondary": "#16a34a",

"accent": "#be123c",

"neutral": "#191D24",

"base-100": "#ffffff",

"info": "#3ABFF8",

"success": "#36D399",

"warning": "#FBBD23",

"error": "#F87272",
        },
      },
      "black"
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}