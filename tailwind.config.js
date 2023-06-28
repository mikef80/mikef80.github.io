/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      fontFamily: {
        'firaSans': ['Fira Sans', 'sans-serif'],
        'firaCode': ['Fira Code', 'serif']
      }
    },
  },
  plugins: [],
}

