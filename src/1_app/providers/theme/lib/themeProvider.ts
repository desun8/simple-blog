import type Vue from 'vue';
import { type InjectionKey, ref, type Ref } from 'vue';

export const PROVIDE_THEME_KEY = Symbol('theme') as InjectionKey<{
  theme: Ref<Theme>;
  setTheme: (a: Theme) => void;
}>;
const LOCAL_STORAGE_THEME_KEY = 'theme';

export const enum Theme {
  LIGHT = 'app-theme-light',
  DARK = 'app-theme-dark',
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const themeProvider: Vue.Plugin = {
  install(app) {
    const theme = ref<Theme>(defaultTheme);
    const setTheme = (newTheme: Theme) => {
      theme.value = newTheme;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    app.provide(PROVIDE_THEME_KEY, { theme, setTheme });
  },
};
