// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
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
  generate: {
    fallback: '404.html',
  },
  buildModules: ['@pinia/nuxt'],
});
