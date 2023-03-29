/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type Vue from 'vue';
import { createApp } from 'vue';

export function withSetup(composable, plugins: Vue.Plugin[] = []) {
  let result;
  const app = createApp({
    setup() {
      result = composable();
      // suppress missing template warning
      return () => {};
    },
  });

  plugins.forEach((plugin) => {
    app.use(plugin);
  });

  app.mount(document.createElement('div'));
  // return the result and the app instance
  // for testing provide / unmount
  return [result, app];
}
