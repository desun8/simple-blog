import { type Ref, computed } from 'vue';
import { type Profile } from '5_entities/Profile/model/types';

export const useInputValue = (
  propValue: Ref<Profile | undefined>,
  valueKey: keyof Profile,
  setter: (a: keyof Profile, b: Profile[keyof Profile]) => void
) => {
  const value = computed({
    get() {
      return propValue.value ? propValue.value[valueKey] : '';
    },
    set(value: Profile[keyof Profile]) {
      setter(valueKey, value);
    },
  });

  return value;
};
