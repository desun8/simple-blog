/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { describe, expect, test } from 'vitest';
// @ts-ignore
import { withSetup } from 'config/vitest/withSetup';
import { useTheme } from './useTheme';
import { Theme, themeProvider } from './themeProvider';

describe('useTheme', () => {
  test('get theme', () => {
    const [result, app] = withSetup(() => useTheme(), [themeProvider]);
    expect(result.theme.value).toBe(Theme.LIGHT);
  });

  test('toggle theme', () => {
    const [result, app] = withSetup(() => useTheme(), [themeProvider]);
    result.toggleTheme();
    expect(result.theme.value).toBe(Theme.DARK);
  });
});
