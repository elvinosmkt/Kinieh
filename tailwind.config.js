/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT:'#C5972C',50:'#FDF8ED',100:'#F9EDCF',200:'#F2DFA0',300:'#E8C45A',400:'#D4AA3E',500:'#C5972C',600:'#A67D24',700:'#8B6914',800:'#6B5210',900:'#4A3A0B' },
        purple: { DEFAULT:'#2D0A3E',100:'#D4B8E0',200:'#9B6BB0',300:'#7B3F96',400:'#5E1D7A',500:'#4A1562',600:'#2D0A3E',700:'#1a0628',800:'#120418' },
        gold: { DEFAULT:'#C5972C',light:'#D4AA3E',bright:'#E8C45A',pale:'#F2DFA0',dark:'#8B6914' },
        wine: { DEFAULT:'#722F37',dark:'#5C1A1B' },
        forest: '#2D5A3D',
        bg: { DEFAULT:'#FDF9F3',dark:'#2D0A3E',card:'#F5EFE6',cream:'#FAF6F0' },
        tx: { DEFAULT:'#2C2C2C',secondary:'#4A4A4A',muted:'#7A7A7A',faint:'#B0B0B0',light:'#E8E4DE' },
      },
      fontFamily: {
        serif: ['Cormorant Garamond','Georgia','serif'],
        sans: ['Montserrat','Helvetica Neue','sans-serif'],
      },
      boxShadow: { glow:'0 0 30px rgba(197,151,44,0.3)', card:'0 4px 30px rgba(45,10,62,0.06)', 'card-hover':'0 12px 40px rgba(45,10,62,0.12)' },
      transitionDuration: { 400:'400ms' },
    },
  },
  plugins: [],
}
