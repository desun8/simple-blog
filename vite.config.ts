import {defineConfig, loadEnv, type UserConfigExport} from 'vite';
import {buildPlugins} from './config/build/buildPlugins';

export default defineConfig(({mode}) => {
  const isDev = mode === 'development';
  const env = loadEnv(mode, process.cwd(), '');

  const config: UserConfigExport = {
    plugins: buildPlugins(isDev),
    server: {
      port: Number(env.DEV_SERVER_PORT),
    },
  };

  return config;
});
