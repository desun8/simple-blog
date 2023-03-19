import vue from '@vitejs/plugin-vue';
import { type PluginOption } from 'vite';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import tsconfigPath from 'vite-tsconfig-paths';
import vueMacros from 'unplugin-vue-macros/vite';
import defineOptions from 'unplugin-vue-define-options/vite';
import svgLoader from 'vite-svg-loader';

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
  ];

  if (isDev) {
    plugins.push(optimizeCssModules());
  }

  return plugins;
};
