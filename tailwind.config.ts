import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // StudyCast 브랜드 컬러
        primary: {
          DEFAULT: '#1C2B4A', // Deep Navy
          50: '#F0F2F7',
          100: '#E1E6EF',
          200: '#C3CDE0',
          300: '#A5B4D0',
          400: '#879BC1',
          500: '#6982B1',
          600: '#4A5B8E',
          700: '#3A476B',
          800: '#2B3449',
          900: '#1C2B4A',
        },
        accent: {
          DEFAULT: '#9CEAEF', // Mint
          50: '#F7FEFF',
          100: '#EEFCFD',
          200: '#DCF9FB',
          300: '#CBF6F9',
          400: '#B9F3F7',
          500: '#A8F0F5',
          600: '#9CEAEF',
          700: '#7BE4EA',
          800: '#5ADDE5',
          900: '#39D7E0',
        },
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#80868B',
          700: '#5F6368',
          800: '#3C4043',
          900: '#202124',
        }
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}

export default config 