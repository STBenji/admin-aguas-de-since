import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {...colors.blue, DEFAULT: colors.blue[600]},
      }
    },
  },
  plugins: [],
}

