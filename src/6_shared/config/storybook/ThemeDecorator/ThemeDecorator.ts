import '1_app/styles/index.css';
import { useTheme, type Theme } from '1_app/providers/theme';
import type { Decorator } from '@storybook/vue3';

export const ThemeDecorator =
  (initialTheme: Theme): Decorator =>
  () => ({
    setup() {
      const { theme, toggleTheme } = useTheme(initialTheme);
      return { theme };
    },
    template: '<div :class="theme"><story/></div>',
  });
