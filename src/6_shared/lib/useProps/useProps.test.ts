import { describe, expect, test } from 'vitest';
import { useProps } from './useProps';

describe('useProps', () => {
  test('empty', () => {
    const result = useProps({});
    expect(result).toEqual({});
  });

  test('with props', () => {
    const props = { class: 'my-class', disabled: true };
    const result = useProps(props);

    expect(result).toEqual(props);
  });

  test('with empty props', () => {
    const props = { class: 'my-class', disabled: false, id: '' };
    const result = useProps(props);

    expect(result).toEqual({ class: 'my-class' });
  });
});
