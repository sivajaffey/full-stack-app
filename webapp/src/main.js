import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import store from './store/index.js';

let app = createApp(App)
app.use(router) // Vue-Router
app.use(store) // Vuex - state management 
app.mount('#app')