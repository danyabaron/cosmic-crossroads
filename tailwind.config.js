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
      'team-gray': '#616161',
      'button-blue': '#484C7D',
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
      header: ['Pixellari', 'sans-serif'],
      narrow: ['Arial Narrow', 'sans-serif'], 
      arial: ['Arial', 'sans-serif'], // Fallback for Arial in case Pixellari fails to load
      techno: ['Handjet', 'sans-serif'], 
      ttneueReg: ['TT Neue Regular', 'sans-serif'],
      ttneueMedium: ['TT Neue Medium', 'sans-serif'],
      ttneueBold: ['TT Neue Bold', 'sans-serif'],
      ttneueLight: ['TT Neue Light', 'sans-serif'],
    

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
        'twinkle': 'starTwinkle 3s ease-in-out infinite alternate',
        'shootingStar': 'shootStar 6s linear infinite',
        'sparkle': 'sparkle 3s infinite',
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
        starTwinkle: {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'scale(0.8)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.1)',
          },
        },
        shootStar: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: 1 },
          '100%': { transform: 'translateX(150vw) translateY(-100vh)', opacity: 0 },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '0.8', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.corner-sparkle': {
          position: 'relative',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '10px',
            height: '10px',
            backgroundColor: 'white',
            borderRadius: '50%',
            filter: 'blur(1px)',
          },
          '&::before': {
            top: '10%',
            right: '10%',
            animationName: 'sparkle',
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationDelay: '0.5s',
          },
          '&::after': {
            bottom: '10%',
            left: '10%',
            animationName: 'sparkle',
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationDelay: '1.5s',
          },
        },
      })
    },
  ],
}

