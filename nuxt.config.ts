// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [`~/assets/test.css`, `animate.css/`] /* une autre façon d'inclure un style css au global, sinon voir index.vue */
})
