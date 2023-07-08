/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/**/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        'gray-50': '0 0 1px rgba(0, 0, 0, 0.5)',
        'gray-500': '0 0 6px rgba(30, 30, 30, 0.5)',
      },
      colors: {
        gray: {
          100: 'rgba(235, 241, 245, 1)',
          200: 'rgba(217, 227, 234, 1)',
          300: 'rgba(197, 210, 220, 1)',
          400: 'rgba(155, 169, 180, 1)',
          500: 'rgba(112, 125, 134, 1)',
          600: 'rgba(85, 89, 95, 1)',
          700: 'rgba(51, 54, 58, 1)',
          800: 'rgba(37, 40, 44, 1)',
          '900-transparent':'rgba(21, 23, 25, 0.9)',
          900: 'rgba(21, 23, 25, 1)',
        },
        blue: {
          100: 'rgba(219, 234, 254, 1)',
          200: 'rgba(191, 219, 254, 1)',
          300: 'rgba(147, 197, 253, 1)',
          400: 'rgba(96, 165, 250, 1)',
          500: 'rgba(59, 130, 246, 1)',
          600: 'rgba(37, 99, 235, 1)',
          700: 'rgba(29, 78, 216, 1)',
          800: 'rgba(30, 64, 175, 1)',
          900: 'rgba(30, 58, 138, 1)',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
  ],
};
