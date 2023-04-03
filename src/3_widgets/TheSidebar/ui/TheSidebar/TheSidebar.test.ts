import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/vue';
import { expect } from 'vitest';
import { render } from '6_shared/lib/tests/render/render';
import TheSidebar from './TheSidebar.vue';

describe('TheSidebar', () => {
  test('Test render', () => {
    render(TheSidebar);
    expect(screen.getByTestId('the-sidebar')).toBeInTheDocument();
  });

  test('Test toggle', async () => {
    render(TheSidebar);
    const toggleBtn = screen.getByTestId('the-sidebar-toggle');
    await fireEvent.click(toggleBtn);
    expect(screen.getByTestId('the-sidebar')).toHaveClass('collapsed');
  });
});
