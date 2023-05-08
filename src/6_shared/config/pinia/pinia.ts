import { type PiniaPlugin, createPinia } from 'pinia';

declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface PiniaCustomProperties {
    /**
     * Run $dispose() and delete the state of the store
     */
    $destroy: () => void;
  }
}

export const destroyPlugin: PiniaPlugin = ({ pinia, store }) => ({
  $destroy() {
    store.$dispose();
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete pinia.state.value[store.$id];

    if (import.meta.env.DEV) {
      console.log(`🍍 Deleted "${store.$id}" store 🗑`);
    }
  },
});

const pinia = createPinia();
pinia.use(destroyPlugin);

export { pinia };
