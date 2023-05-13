import { type Component, type Plugin } from 'vue';
import {
  type RenderOptions,
  render as testingRender,
} from '@testing-library/vue';
import { i18n } from '6_shared/config/i18n/i18n';
import { router } from '1_app/providers/router';
import { pinia } from '6_shared/config/pinia/pinia';

const defaultPlugins: Plugin[] = [pinia, router, i18n];

export const render = (component: Component, configs: RenderOptions = {}) => {
  const options = { ...configs };
  if (options.global?.plugins) {
    options.global.plugins = [...options.global.plugins, ...defaultPlugins];
  } else {
    if (options.global === undefined) {
      options.global = {};
    }

    options.global.plugins = [...defaultPlugins];
  }

  return testingRender(component, options);
};
