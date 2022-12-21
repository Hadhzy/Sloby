/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        gradientMove: 'gradient_move 8s ease-in-out infinite',
      },
      keyframes: {
        gradient_move: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      colors: {
        back: '#11162b',
        'dark-dark': '#28293d',
        'dark-mid': '#555870',
        'dark-light': '#9090a7',
        'red-dark': '#ff3b3b',
        'red-mid': '#ff5c5c',
        'red-light': '#ff8080',
        'green-dark': '#05c270',
        'green-mid': '#39da8a',
        'green-light': '#57eba3',
        'blue-dark': '#0063f8',
        'blue-mid': '#5b8dee',
        'blue-light': '#9dbff8',
        'yellow-dark': '#ffcc00',
        'yellow-mid': '#fedd49',
        'yellow-light': '#feed73',
      },
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      enlarge: '190%',
    },
  },
  plugins: [],
}
