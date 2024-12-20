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
      'white' : '#FFFFFF',
      'team-gray': '#616161'
    },
    backgroundImage: {
      'mars-bg-reg': "url('./assets/backgrounds/mars-normal-size.png')",
      'mars-bg-scroll': "url('./assets/backgrounds/mars-background-official.png')",
      'venus-bg-scroll': "url('./assets/backgrounds/venus-background-official.png')",
      'venus-bg-reg': "url('./assets/backgrounds/venus-normal-size.png')",
      'jupiter-bg-reg': "url('./assets/backgrounds/jupiter-normal-size.png')",
      'jupiter-bg-scroll': "url('./assets/backgrounds/jupiter-background-official.png')",
      'saturn-bg-reg': "url('./assets/backgrounds/saturn-normal-size.png')",
      'saturn-bg-scroll': "url('./assets/backgrounds/saturn-background-official.png')"


    },
    fontFamily: {
      body: ['04B_03__'],
      header: ['Pixellari', 'sans-serif']

    },
    extend: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
  },
  plugins: [],
}

