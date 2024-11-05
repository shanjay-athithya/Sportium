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
        primaryOrange: '#FFA500',
        darkGrey: '#333333',
        lightGrey: '#F5F5F5',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
