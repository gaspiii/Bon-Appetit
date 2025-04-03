/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          jost: ['Jost', 'sans-serif '],
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  