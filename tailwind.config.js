/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  // safelist: [
  //   "scroll-container", "panel"
  // ],

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
      'saturn-bg-scroll': "url('./assets/backgrounds/saturn-background-official.png')",
      'default-bg': "url('./assets/backgrounds/default-background.png')",


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

      animation: {
        'fiery-pulse': 'fieryPulse 1.5s infinite ease-in-out',
        'fire-trail': 'moveTrail 2s linear infinite, fadeOut 2s linear infinite',
      },
      keyframes: {
        fieryPulse: {
          '0%': {
                boxShadow: '0 0 15px #C25811, 0 0 30px #C25811', // Glow with #C25811 color
                },
          '50%': {
            boxShadow: '0 0 25px #C25811, 0 0 50px #C25811', // Intensified glow
          },
          '100%': {
            boxShadow: '0 0 15px #C25811, 0 0 30px #C25811', // Glow with #C25811 color
          },
        },
        moveTrail: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(100vw)', opacity: 0 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

