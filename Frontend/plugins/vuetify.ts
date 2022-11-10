import { defineNuxtPlugin } from '#app';
import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css' 
// import colors from 'vuetify/lib/util/colors';

const myLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#283593',
    // background: '',
    // surface: '',
    // secondary: '',
    // error: '',
    // info: '',
    // success: '',
    // warning: '',
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    theme: {
      defaultTheme: 'myLightTheme',
      themes: {
        myLightTheme,
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
