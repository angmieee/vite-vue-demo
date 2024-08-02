import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index';
import ElementPlus from 'element-plus';
import App from './App.vue';
import '@/style/index.css';
import 'element-plus/theme-chalk/index.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount('#app');
