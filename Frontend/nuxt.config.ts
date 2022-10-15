// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  server: {
    host: 'localhost',
  },
  ssr: false,
  css: ['vuetify/lib/styles/main.sass'],
  build: {
      transpile: ['vuetify']
  },
  vite: {
      define: {
          'process.env.DEBUG': 'false',
      }
  },
});
