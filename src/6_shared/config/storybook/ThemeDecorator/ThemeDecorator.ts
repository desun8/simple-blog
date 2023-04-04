import '1_app/styles/index.css';
import { type Theme } from '1_app/providers/theme';
import type { Decorator } from '@storybook/vue3';

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  () => ({
    template: `<div class='${theme}'><story/></div>`,
  });
