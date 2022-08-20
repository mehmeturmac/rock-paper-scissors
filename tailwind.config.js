/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      borderColor: {
        paper: '#4865f4',
        scissors: '#ec9e0e',
        rock: '#dc2e4e',
      },
      backgroundImage: {
        paper: "url('../public/images/icon-paper.svg')",
        scissors: "url('../public/images/icon-scissors.svg')",
        rock: "url('../public/images/icon-rock.svg')",
      },
      boxShadow: {
        paper: 'inset 0 5px 6px grey, 0 8px #0d31e3',
        scissors: 'inset 0 5px 6px grey, 0 8px #a46e0a',
        rock: 'inset 0 5px 6px grey, 0 8px #a11b34',
        'paper-active': 'inset 0 5px 6px grey, 0 8px #0d31e3, 0 0 0 50px hsl(0deg 0% 100% / 7%), 0 0 0 100px hsl(0deg 0% 100% / 5%), 0 0 0 150px hsl(0deg 0% 100% / 3%)',
        'scissors-active': 'inset 0 5px 6px grey, 0 8px #a46e0a, 0 0 0 50px hsl(0deg 0% 100% / 7%), 0 0 0 100px hsl(0deg 0% 100% / 5%), 0 0 0 150px hsl(0deg 0% 100% / 3%)',
        'rock-active': 'inset 0 5px 6px grey, 0 8px #a11b34, 0 0 0 50px hsl(0deg 0% 100% / 7%), 0 0 0 100px hsl(0deg 0% 100% / 5%), 0 0 0 150px hsl(0deg 0% 100% / 3%)',
      },
      backgroundSize: {
        50: '50%',
      },
    },
  },
  plugins: [],
};
