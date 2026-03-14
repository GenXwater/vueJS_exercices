// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css" // va chercher directement dans les node_module.
  ],
  runtimeConfig: {
    apiSecret: process.env.NEWSDATA_API_KEY,

    public: {
      apiBase: 'https://newsdata.io/api/1'
    }
  }
})
