/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFDFB',
          100: '#FDF9F3',
          200: '#FAF3E8',
          300: '#F5EBD9',
          400: '#EDE0C7',
          500: '#E5D4B5',
        },
        beige: {
          50: '#FAF8F5',
          100: '#F5F0E8',
          200: '#EBE3D5',
          300: '#DDD2BE',
          400: '#C9B99A',
          500: '#B5A07B',
          600: '#9A8461',
        },
        olive: {
          50: '#F6F7F4',
          100: '#EAEDE4',
          200: '#D5DBC9',
          300: '#B8C4A3',
          400: '#96A87A',
          500: '#768B5A',
          600: '#5C6E47',
          700: '#495638',
          800: '#3C462F',
          900: '#333B29',
        },
        terracotta: {
          50: '#FDF6F3',
          100: '#FAEAE3',
          200: '#F5D5C7',
          300: '#EDB89F',
          400: '#E29373',
          500: '#D4714E',
          600: '#C55A38',
          700: '#A4472E',
          800: '#873C2A',
          900: '#6F3526',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#454545',
          900: '#3D3D3D',
          950: '#262626',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

