import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/vue';
import AppButton from './AppButton.vue';
import { AppButtonTheme } from './types/AppButtonTheme';

describe('AppButton', () => {
  test('Test render', () => {
    render(AppButton, { slots: { default: () => 'Button text' } });
    expect(screen.getByText('Button text')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(AppButton, {
      props: { theme: AppButtonTheme.CLEAR },
      slots: { default: () => 'Button text' },
    });
    expect(screen.getByText('Button text')).toHaveClass('clear');
  });
});
