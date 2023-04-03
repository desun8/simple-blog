import { defineConfig } from 'vitest/config';
import { buildPlugins } from '../build/buildPlugins';

export default defineConfig({
  plugins: buildPlugins(false),
  test: {
    globals: true,
    environment: 'happy-dom',
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
});
