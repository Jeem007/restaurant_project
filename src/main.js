import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import App from './App.vue'
import './assets/tailwind.css'
import router from './routes'





createApp(App).use(router).use(PrimeVue).mount('#app')


