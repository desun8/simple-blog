import { router } from '1_app/providers/router';
import { themeProvider } from '1_app/providers/theme';
import { i18n } from '6_shared/config/i18n/i18n';
import { createApp, h } from 'vue';
import App from './1_app/App.vue';
import './1_app/styles/index.css';
import { ErrorBoundary } from '1_app/providers/ErrorBoundary';

createApp({
  render() {
    return h(ErrorBoundary, null, {
      default: () => [h(App)],
    });
  },
})
  .use(router)
  .use(i18n)
  .use(themeProvider)
  .mount('#app');
