// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      link: [{ rel: 'stylesheet', href:`https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css`}]
    }
  }, // ça c'est pour directement injecter le CSS sans isntallation npm intall, mais moins fiable car dépendance réseau externe.
  
  css: [`~/assets/test.css`, `animate.css/`] /* une autre façon d'inclure un style css au global, sinon voir index.vue */
})
