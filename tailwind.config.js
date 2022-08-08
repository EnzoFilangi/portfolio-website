/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['"Fira Code"', 'monospace'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#FAFAFA',
        'black': '#2B2D2C',
        'orange': '#D8814B',
        'red': '#FF5858',
        'blue': '#99C6FF',
        'cyan-green': '#29D6B9',
        'cyan-blue': '#28B8D5'
      },
    },
  },
  plugins: [],
}
