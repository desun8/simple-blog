import type Vue from 'vue';
import { createApp } from 'vue';

export function withSetup<T>(
  composable: () => T,
  plugins: Vue.Plugin[] = []
): [T, Vue.App] {
  let result!: T;

  const app = createApp({
    setup() {
      result = composable();
      // suppress missing template warning
      return () => undefined;
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
