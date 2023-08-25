const path = require('path');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ["@/assets/css/tailwind.css"], // <= ドキュメントからさらに追加
  nitro: {
    preset: 'github-pages'
  },
  // app: {
  //   cdnURL: 'https://tukumouji99.github.io/alkome-jp/',
  //   baseURL: '/alkome-jp/'
  // },
})
