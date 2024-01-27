import colors from 'tailwindcss/colors'
import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.blue, DEFAULT: colors.blue[600] },
        base: '#f5f5f5'
      }
    }
  },
  plugins: [nextui()]
}
