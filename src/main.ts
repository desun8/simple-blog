import { router } from '1_app/providers/router';
import { i18n } from '6_shared/config/i18n/i18n';
import { createApp } from 'vue';
import App from './1_app/App.vue';
import './1_app/styles/index.css';

createApp(App).use(router).use(i18n).mount('#app');
