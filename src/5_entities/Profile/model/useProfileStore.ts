import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { ProfileSchema, Profile } from './types';
import { useFetch } from '6_shared/lib/useFetch/useFetch';

export const useProfileStore = defineStore('profile', (): ProfileSchema => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _data = ref<Profile>();
  const data = ref<Profile>();
  const isLoading = ref(false);
  const errorMsg = ref('');
  const readonly = ref(true);

  watch(_data, (newValue) => {
    data.value = newValue;
  });

  async function fetchData() {
    isLoading.value = true;
    errorMsg.value = '';

    const {
      data: resData,
      error,
      isFetching,
    } = await useFetch<Profile>('/profile').get().json<Profile>();

    errorMsg.value = error.value ? String(error.value) : '';
    isLoading.value = isFetching.value;

    if (!error.value && resData.value) {
      _data.value = resData.value;
    }

    return resData;
  }

  async function updateData() {
    isLoading.value = true;
    errorMsg.value = '';

    const {
      data: resData,
      error,
      isFetching,
    } = await useFetch<Profile>('/profile').put(data.value).json<Profile>();

    errorMsg.value = error.value ? String(error.value) : '';
    isLoading.value = isFetching.value;

    if (!error.value && resData.value) {
      _data.value = resData.value;
    }
  }

  function cancelChanges() {
    data.value = _data.value;
  }

  return {
    data,
    isLoading,
    errorMsg,
    readonly,
    fetchData,
    updateData,
    cancelChanges,
  };
});
