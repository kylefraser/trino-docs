/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { createThemes } = require('tw-colors');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,md,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    './components/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      orange: '#f57c00',
      pink: '#dd00a1',
    },
    extend: {
      fontFamily: {
        header: ['var(--font-alata)', ...defaultTheme.fontFamily.sans],
        sans: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono],
        geist: ['var(--font-geist)'],
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        background: 'rgba(0, 0, 0, 0.05)',
        orange: {
          100: '#fefcfb',
          200: '#fff6f0',
          300: '#ffecdd',
          400: '#ffdbc0',
          500: '#ffcda8',
          600: '#ffbe92',
          700: '#f4ad7f',
          800: '#e8965f',
          900: '#f57c00',
          1000: '#e67200',
          1100: '#b96200',
          1200: '#553017',
        },
        pink: {
          100: '#fffcfe',
          200: '#fff7fb',
          300: '#ffe7f5',
          400: '#ffd9ee',
          500: '#fdcbe6',
          600: '#f8badc',
          700: '#f1a6d0',
          800: '#e98bc1',
          900: '#dd00a1',
          1000: '#cd0094',
          1100: '#ce0094',
          1200: '#6d004d',
        },
      },
      dark: {
        background: 'rgba(255, 255, 255, 0.05)',
        orange: {
          100: '#15100c',
          200: '#1e1610',
          300: '#331d0e',
          400: '#481f00',
          500: '#562803',
          600: '#653614',
          700: '#7c4721',
          800: '#9f5b2a',
          900: '#f57c00',
          1000: '#e77100',
          1100: '#ff9f56',
          1200: '#ffdec8',
        },
        pink: {
          100: '#180d13',
          200: '#23101b',
          300: '#3c122c',
          400: '#53063b',
          500: '#610f46',
          600: '#721e54',
          700: '#8c2c6a',
          800: '#b33987',
          900: '#dd00a1',
          1000: '#cd0094',
          1100: '#ff80d4',
          1200: '#ffcdeb',
        },
      },
    }),
  ],
};
