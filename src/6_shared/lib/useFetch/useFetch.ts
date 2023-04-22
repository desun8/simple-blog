import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage';
import { createFetch } from '@vueuse/core';

export const useFetch = createFetch({
  baseUrl: import.meta.env.VITE_BASE_URL as string,
  combination: 'chain',
  options: {
    async beforeFetch({ options }) {
      options.headers = {
        ...options.headers,
        Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? '',
      };
      return { options };
    },
  },
});
