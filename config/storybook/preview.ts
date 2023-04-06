/* eslint-disable new-cap */
import { type Preview, setup } from '@storybook/vue3';
import { StyleDecorator } from '6_shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme, themeProvider } from '1_app/providers/theme';
import { router } from '1_app/providers/router/config/router';
import { type App } from 'vue';
import { i18n } from '6_shared/config/i18n/i18n';

setup((app: App) => {
  app.use(router);
  app.use(i18n);
  app.use(themeProvider);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT)],
};

export default preview;
