// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: "Test NuxtJs APP",
      meta: [
        { name: "description", content: "Testing NuxtJs 3"}
      ],
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}
      ]
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  runtimeConfig: {
    currencyApiKey: process.env.CURRENCY_API_KEY
  }
})