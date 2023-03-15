import vue from '@vitejs/plugin-vue';
import {type PluginOption} from 'vite';
import {optimizeCssModules} from 'vite-plugin-optimize-css-modules';

export const buildPlugins = (isDev: boolean): PluginOption[] => {
  const plugins = [vue()];

  if (isDev) {
    plugins.push(optimizeCssModules());
  }

  return plugins;
};
