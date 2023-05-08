import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import {
  type ProfileSchema,
  type Profile,
  ValidateProfileError,
} from './types';
import { useFetch } from '6_shared/lib/useFetch/useFetch';
import { validateProfileData } from './validateProfileData/validateProfileData';

export const useProfileStore = defineStore('profile', (): ProfileSchema => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _data = ref<Profile>();
  const data = ref<Profile>();
  const isLoading = ref(false);
  const errors = ref<ValidateProfileError[]>();
  const readonly = ref(true);

  watch(_data, (newValue) => {
    data.value = newValue;
  });

  async function fetchData() {
    isLoading.value = true;
    errors.value = undefined;

    const {
      data: resData,
      error,
      isFetching,
    } = await useFetch<Profile>('/profile').get().json<Profile>();

    if (error.value) {
      errors.value = [ValidateProfileError.SERVER_ERROR];
    }

    isLoading.value = isFetching.value;

    if (errors.value === undefined && resData.value) {
      _data.value = resData.value;
    }

    return resData;
  }

  async function updateData() {
    isLoading.value = true;
    errors.value = undefined;

    const validateErrors = validateProfileData(data.value);

    if (validateErrors) {
      isLoading.value = false;
      errors.value = validateErrors;
    } else {
      const {
        data: resData,
        error,
        isFetching,
      } = await useFetch<Profile>('/profile').put(data.value).json<Profile>();

      if (error.value) {
        errors.value = [ValidateProfileError.SERVER_ERROR];
      }

      isLoading.value = isFetching.value;

      if (errors.value === undefined) {
        if (resData.value) {
          _data.value = resData.value;
        } else {
          errors.value = [ValidateProfileError.NO_DATA];
        }
      }
    }
  }

  function cancelChanges() {
    data.value = _data.value;
  }

  return {
    data,
    isLoading,
    errors,
    readonly,
    fetchData,
    updateData,
    cancelChanges,
  };
});
