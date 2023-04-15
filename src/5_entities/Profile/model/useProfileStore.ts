import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ProfileSchema, Profile } from './types';

export const useProfileStore = defineStore('user', (): ProfileSchema => {
  const data = ref<Profile>();
  const isLoading = ref(false);
  const error = ref<string>();
  const readonly = ref(true);

  return { data, isLoading, error, readonly };
});
