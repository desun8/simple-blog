import {router} from '1_app/providers/router';
import {createApp} from 'vue';
import App from './1_app/App.vue';

createApp(App)
  .use(router)
  .mount('#app');
