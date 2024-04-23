/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'cloudy': "url('../public/images/cloudy-bg.jpeg')",
      },
      colors: {
        slate:{
          50: '#464d5025',
          100: '#464d50a2;',
          700: '#2b3442',
          800: '#23252A',
          900: '#141d2f',
        },
        white: {
          50: '#ffffff11',
          100: '#ffffff',
          200: '#fefefe',
          300: '#EDEDED',
          400: '#f2f2f2',
        },
        red: {
          400: '#E57826',
          500: '#E26503',
          600: '#DB3317',
          700: '#F6281E',
        },
      },
    },
  },
  plugins: [],
};
