/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.vue", // <= ドキュメントからさらに追加
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Biz: ['BIZ UDGothic', 'sans-serif'],
      Oswald: ['Oswald', 'sans-serif']
    }
  },
  plugins: [],
}

