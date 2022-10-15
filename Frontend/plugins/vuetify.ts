import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import {
    VApp,
    VAppBar,
    VBtn,
    VCard,
    VThemeProvider,
} from 'vuetify/components'

// Import everything
// import * as components from 'vuetify/components'

export default defineNuxtPlugin((nuxtApp) => {
   const vuetify = createVuetify({
       components: {
           VApp,
           VAppBar,
           VBtn,
           VCard,
           VThemeProvider,
       }
   })
   nuxtApp.vueApp.use(vuetify)
})