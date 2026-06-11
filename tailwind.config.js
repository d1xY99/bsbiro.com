/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable import/extensions */
/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', ..._fontFamily.sans],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4-5xl': '2.625rem',
      '5xl': '3rem',
      '5-5xl': '3.875rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        'light-theme-purple': '#E3D3FD',
        'theme-light-blue': '#0868a7',
        'dark-theme-purple': '#520dc2',
        'theme-blue': '#152C5B',
        navy: {
          950: '#060B1A',
          900: '#0A1228',
          800: '#101B3A',
          700: '#16244C',
        },
        accent: {
          cyan: '#22D3EE',
          blue: '#3B82F6',
          gold: '#FBBF24',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(34, 211, 238, 0.45)',
        'glow-sm': '0 0 24px -6px rgba(34, 211, 238, 0.35)',
        'glow-gold': '0 0 40px -8px rgba(251, 191, 36, 0.4)',
      },
      margin: {
        '-112': '-28rem',
        '-120': '-30rem',
        '-128': '-32rem',
        '-144': '-36rem',
      },
      animation: {
        'bounce-x': 'bouncex 1s infinite',
        'gradient-x': 'gradientx 6s ease infinite',
        'float-slow': 'floaty 7s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        'pulse-glow': 'pulseglow 4s ease-in-out infinite',
      },
      keyframes: {
        bouncex: {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        gradientx: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseglow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      spacing: {
        71: '17.75rem',
        95: '23.5rem',
        192: '48rem',
        192.5: '49.5rem',
        193: '51rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
