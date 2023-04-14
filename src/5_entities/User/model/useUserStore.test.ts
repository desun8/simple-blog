import { createPinia, setActivePinia } from 'pinia';
import { useUserStore } from './useUserStore';
import { type User } from './types';
import { USER_LOCALSTORAGE_KEY } from '6_shared/const/localStorage';

const userData: User = {
  id: '1',
  username: 'admin',
};

describe('useUserStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('set auth data', () => {
    const userStore = useUserStore();
    expect(userStore.authData).toEqual(undefined);

    userStore.setAuthData(userData);
    expect(userStore.authData).toEqual(userData);
  });

  test('init auth data', () => {
    const userStore = useUserStore();
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userData));

    userStore.initAuthData();
    expect(userStore.authData).toEqual(userData);
  });

  test('logout', () => {
    const userStore = useUserStore();
    userStore.setAuthData(userData);
    userStore.logout();
    expect(userStore.authData).toEqual(undefined);
  });
});
