import { type Ref, ref, inject } from 'vue';
import { Theme, PROVIDE_THEME_KEY } from './themeProvider';

export type UseThemeResult = {
  toggleTheme: () => void;
  theme: Ref<Theme>;
};

export const useTheme = (initialTheme?: Theme): UseThemeResult => {
  const { theme, setTheme } = inject(PROVIDE_THEME_KEY, {
    theme: ref(Theme.LIGHT),
    setTheme(a: Theme) {
      console.warn('Problem with injected PROVIDE_THEME_KEY');
    },
  });

  const toggleTheme = () => {
    const newTheme = theme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
  };

  if (initialTheme) {
    setTheme(initialTheme);
  }

  return {
    toggleTheme,
    theme,
  };
};
