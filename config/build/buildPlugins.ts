import vue from '@vitejs/plugin-vue';
import { type PluginOption } from 'vite';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import tsconfigPath from 'vite-tsconfig-paths';
import vueMacros from 'unplugin-vue-macros/vite';
import defineOptions from 'unplugin-vue-define-options/vite';
import svgLoader from 'vite-svg-loader';
import i18nPlugin from '@intlify/unplugin-vue-i18n/vite';

export const buildPlugins = (isDev: boolean): PluginOption[] => {
  const plugins = [
    tsconfigPath(),
    vueMacros({
      plugins: {
        vue: vue(),
      },
    }),
    defineOptions(),
    svgLoader(),
    i18nPlugin({}),
  ];

  if (isDev) {
    plugins.push(optimizeCssModules());
  }

  return plugins;
};
