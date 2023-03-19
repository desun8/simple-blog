import {
  type PropsWithDefaults,
  type InferDefaults,
} from '@vue-macros/define-props-refs/macros';
import { type RefValueObject } from '@vue-macros/define-props/macros';

type Props<T> = PropsWithDefaults<
  RefValueObject<T>,
  InferDefaults<RefValueObject<T>>
>;

export const useProps = <T>(props: Props<T>): Props<T> => {
  const filteredProps = Object.fromEntries(
    Object.entries(props).filter(([_, value]) => Boolean(value))
  ) as Props<T>;

  return { ...filteredProps };
};
