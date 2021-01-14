import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
// import store from './store/index.js';
// import router from './router.js';

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-card', BaseCard)
// app.use(store);
// app.use(router);

app.mount('#app');