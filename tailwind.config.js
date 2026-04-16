/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6b1a28',
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d7',
          300: '#f4a9b6',
          400: '#eb7a8f',
          500: '#de4d6a',
          600: '#c92e52',
          700: '#a82042',
          800: '#6b1a28',
          900: '#4a0d17',
          950: '#2d0610',
        },
        gold: {
          DEFAULT: '#c6a75e',
          light: '#d4bc82',
          dark: '#a8893e',
        },
        background: {
          DEFAULT: '#0a0a0a',
          dark: '#080808',
          light: '#f8f6f4',
          card: '#111111',
        },
        text: {
          primary: '#f5f0eb',
          secondary: '#d4cfc8',
          tertiary: '#a09a92',
          muted: '#6b655e',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(107, 26, 40, 0.4)',
        'glow-gold': '0 0 20px rgba(198, 167, 94, 0.3)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
