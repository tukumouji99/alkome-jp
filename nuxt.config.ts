const path = require('path');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    "@nuxtjs/robots",
  ],
  gtag: {
    // 測定ID
    id: 'G-JLG2Q5KKZ1'
  },
  css: ["@/assets/css/tailwind.css"], // <= ドキュメントからさらに追加
  nitro: {
    preset: 'github-pages',
    output: {
      publicDir: path.join(__dirname, 'docs')
    }
  },
  app: {
    head: {
      title: "alkome.jp",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  robots: {
    UserAgent: "*",
    Disallow: "",
  }
})
