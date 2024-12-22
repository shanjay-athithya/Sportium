/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#D66117',
        darkGrey: '#333333',
        lightGrey: '#666666',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
