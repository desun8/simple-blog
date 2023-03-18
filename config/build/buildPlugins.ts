import vue from '@vitejs/plugin-vue';
import { type PluginOption } from 'vite';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import tsconfigPath from 'vite-tsconfig-paths';

export const buildPlugins = (isDev: boolean): PluginOption[] => {
  const plugins = [tsconfigPath(), vue()];

  if (isDev) {
    plugins.push(optimizeCssModules());
  }

  return plugins;
};
