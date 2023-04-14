import { createFetch } from '@vueuse/core';

export const useFetch = createFetch({
  baseUrl: import.meta.env.VITE_BASE_URL as string,
  combination: 'chain',
  options: {},
});
