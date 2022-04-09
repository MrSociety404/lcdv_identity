import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import './assets/css/styles.css';
import './assets/css/main.scss';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
