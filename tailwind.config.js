/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        arabic: ['"Amiri"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        lora: ['"Lora"', 'serif'],
      },
      colors: {
        brand: {
          50: '#f5f7fa',
          100: '#ebeff5',
          500: '#5c6ac4',
          600: '#4754a6',
          700: '#394285',
        }
      }
    },
  },
  plugins: [],
}
