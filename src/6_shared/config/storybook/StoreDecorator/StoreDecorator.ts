import type { Decorator } from '@storybook/vue3';

export const StoreDecorator =
  (initState: () => unknown): Decorator =>
  () => ({
    setup() {
      initState();
    },
    template: '<story/>',
  });
