/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "mob-landscape": { raw: "(orientation: landscape)" },
      },
    },
  },
  plugins: [],
};
