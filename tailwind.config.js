module.exports = {
  content: {
    files: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        montserrat: ['Montserrat']
      },
      colors: {
        'card': '#0e1a2b',
        'white': '#ffffff',
        'inputlabel': '#c1d1e8',
        'inputbg': '#182c47',
        'accentblue': '#5692e8',
        'darkblue': '#081221',
        'darkblue2': '#03080f',
      }
    },
  },
  plugins: [],
}
