/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pale-blue': "hsl(221, 100%, 96%)",
        'slate-blue': {
          light: "hsl(252, 100%, 67%)",
          dark: "hsl(241, 81%, 54%)",
        },
        'violet-blue': "hsla(256, 72%, 46%, 1)",
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
        'light-red': {
          default: 'hsl(0, 100%, 67%)',
          light: 'hsla(0, 100%, 67%, .2)'
        },
        'orangey-yellow': {
          default: 'hsl(39, 100%, 56%)',
          light: 'hsla(39, 100%, 56%, .2)',
        },
        'green-teal': {
          default: 'hsl(166, 100%, 37%)',
          light: 'hsla(166, 100%, 37%, .2)'
        },
        'cobalt-blue': {
          default: 'hsl(234, 85%, 45%)',
          light: 'hsla(234, 85%, 45%, .2)',
        },
      },
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}
