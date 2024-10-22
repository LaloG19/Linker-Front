import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import router from './router';

import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Opcional: Iconos Material Design

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createPinia } from 'pinia';
import axios from 'axios';
import 'vuetify/styles';
import './style.css';

axios.defaults.baseURL = 'https://tu-api-endpoint';

const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App).use(pinia).use(vuetify).use(router).mount('#app');