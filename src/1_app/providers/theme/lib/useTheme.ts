import {type Ref, ref} from 'vue';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const enum Theme {
	LIGHT = 'app-theme-light',
	DARK = 'app-theme-dark',
}

type UseThemeResult = {
  toggleTheme: () => void;
  theme: Ref<Theme>;
};

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const useTheme = (): UseThemeResult => {
  const theme = ref<Theme>(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		theme.value = newTheme;
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    toggleTheme,
    theme,
  };
};
