/** @type {import('tailwindcss').Config} */
module.exports= {
  content: ["./src/**/*.{html,js,svelte}"],
  darkMode:'class',
  theme: {
    extend: {fontFamily:{
      'Montserrat' :["'Montserrat'",'sans-serif'],
    },},
  },
  plugins: [require("daisyui")],
}

