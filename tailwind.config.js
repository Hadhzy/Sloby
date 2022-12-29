const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            animation: {
                'gradientMove': 'gradient_move 8s ease-in-out infinite',
                'shake': 'shake 4.72s ease',
            },
            keyframes: {
                gradient_move: {
                    '0%, 100%': {'background-position': '0% 50%'},
                    '50%': {'background-position': '100% 50%'},
                },
                shake: {
                    '0%': {transform: 'translate(0,0)'},
                    '1.78571%': {transform: 'translate(10px,0)'},
                    '3.57143%': {transform: 'translate(0,0)'},
                    '5.35714%': {transform: 'translate(10px,0)'},
                    '7.14286%': {transform: 'translate(0,0)'},
                    '8.92857%': {transform: 'translate(10px,0)'},
                    '10.71429%': {transform: 'translate(0,0)'},
                    '100%': {transform: 'translate(0,0)'}
                }
            },
            colors: {
                'back': '#040404',
                'dark-font-light': '#909090',
                'dark-darkest': '#000000',
                'dark-dark-hover': '#141414',
                'dark-project-bg': 'rgba(0, 0, 0, 0.65)',
                'dark-darker': '#0D0D0D',
                'dark-blur-bg': "#0c0c0c", 
                "dark-input-border": "rgba(0, 0, 0, 0.1)",    
                'input-placeholder': "#aaaaaa",
                'input-placeholder-font': "#898989",               
                'dark-dark': '#111111',
                'dark-font-mid': '#707070',
                'dark-dark-mid': '#121212',
                'dark-border': '#202020',
                'dark-mid': '#373737',
                'dark-font-color': '#505050',
                'dark-light': '#cfcfcf',
                'red-dark': '#ff3b3b',
                'red-mid': '#ff5c5c',
                'red-light': '#ff8080',
                'green-dark': '#05c270',
                'green-mid': '#39da8a',
                'green-light': '#57eba3',
                'blue-dark': '#0063f8',
                'blue-perfect': '#0085ff',
                'blue-mid': '#5b8dee',
                'blue-light': '#9dbff8',
                'yellow-dark': '#ffcc00',
                'yellow-mid': '#fedd49',
                'yellow-light': '#feed73',
                'blurple': '#4f40ff'
            },
            borderRadius: {
                'large': '50px',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
        backgroundSize: {
            'auto': 'auto',
            'cover': 'cover',
            'contain': 'contain',
            'enlarge': '190%',
        },
    },
    plugins: [require('@tailwindcss/forms'),],
}
