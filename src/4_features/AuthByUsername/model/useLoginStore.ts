import { useUserStore } from '5_entities/User';
import { type User } from '5_entities/User/model/types';
import { useFetch } from '6_shared/lib/useFetch/useFetch';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type LoginSchema } from './types';

export const useLoginStore = defineStore('login', (): LoginSchema => {
  const userStore = useUserStore();

  const username = ref('');
  const password = ref('');
  const isLoading = ref(false);
  const errorMsg = ref('');

  async function loginByUsername() {
    isLoading.value = true;
    errorMsg.value = '';

    const { data, error, isFetching } = await useFetch<User>('/login')
      .post({
        username: username.value,
        password: password.value,
      })
      .json<User>();

    errorMsg.value = error.value ? String(error.value) : '';
    isLoading.value = isFetching.value;

    if (!error.value && data.value?.id && data.value?.username) {
      console.log('user auth!');
      userStore.setAuthData(data.value);
    }

    return data;
  }

  return {
    username,
    password,
    isLoading,
    errorMsg,
    loginByUsername,
  };
});
