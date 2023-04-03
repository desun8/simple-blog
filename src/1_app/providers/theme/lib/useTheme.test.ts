import { describe, expect, test } from 'vitest';
import { withSetup } from '6_shared/lib/tests/withSetup/withSetup';
import { type UseThemeResult, useTheme } from './useTheme';
import { Theme, themeProvider } from './themeProvider';

describe('useTheme', () => {
  test('get theme', () => {
    const [result, app] = withSetup<UseThemeResult>(
      () => useTheme(),
      [themeProvider]
    );
    expect(result.theme.value).toBe(Theme.LIGHT);
  });

  test('toggle theme', () => {
    const [result, app] = withSetup(() => useTheme(), [themeProvider]);
    result.toggleTheme();
    expect(result.theme.value).toBe(Theme.DARK);
  });
});
