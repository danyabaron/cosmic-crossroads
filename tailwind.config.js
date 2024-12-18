/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'main-black': '#171711',
      'mars-red': '#BD3508',
      'jupiter-purple': '#796A7F',
      'venus-pink': '#D77BBA',
      'white' : '#FFFFFF'
    },
    backgroundImage: {
      'mars-bg-reg': "url('./assets/backgrounds/mars-normal-size.png')"

    },
    fontFamily: {
      body: ['04B_03__'],
      header: ['Pixellari', 'sans-serif']

    },
    extend: {},
  },
  plugins: [],
}

