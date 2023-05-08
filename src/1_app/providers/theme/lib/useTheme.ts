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
    let newTheme: Theme;

    switch (theme.value) {
      case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.ORANGE;
        break;
      case Theme.ORANGE:
        newTheme = Theme.LIGHT;
        break;
      default:
        newTheme = Theme.LIGHT;
    }

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
