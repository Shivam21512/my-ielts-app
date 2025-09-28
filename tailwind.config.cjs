module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        brand: {
          50: '#eefbf8',
          100: '#dff7f2',
          500: '#0ea5a4',
          600: '#0b8f7f'
        }
      }
    }
  },
  plugins: [],
}
