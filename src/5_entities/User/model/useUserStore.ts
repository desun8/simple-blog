import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type UserSchema, type User } from './types';

export const useUserStore = defineStore('user', (): UserSchema => {
  const authData = ref<User>();

  function setAuthData(payload: User) {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(payload));
    authData.value = payload;
  }

  function initAuthData() {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (user) {
      authData.value = JSON.parse(user) as User;
    }
  }

  function logout() {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (user) {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }

    authData.value = undefined;
  }

  return { authData, setAuthData, initAuthData, logout };
});
