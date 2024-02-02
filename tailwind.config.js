import colors from 'tailwindcss/colors'
import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { ...colors.blue, DEFAULT: '#1090cb', darken: '#004fb6', lighter: '#1090cb10' },
        secondary: { ...colors.cyan, DEFAULT: '#08d3bb' },
        terciary: colors.white,
        loading: colors.gray[300],
        base: '#f5f5f5'
      },
      height: {
        navbar: '4rem',
        'full-screen': 'calc(100vh - 4rem)'
      }
    }
  },
  plugins: [nextui()]
}
