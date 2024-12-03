/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: {
          500 :"#146eb4",
          1000:"#1f263e"
        },
        gray:{
          500 :"#f2f2f2"
        }
      },
      size:{
        24:"50px",
        5:"25px"
      }
    },
  },
  plugins: [],
}

