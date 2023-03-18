import { router } from '1_app/providers/router';
import { createApp } from 'vue';
import App from './1_app/App.vue';
import './1_app/styles/index.css';

createApp(App).use(router).mount('#app');
