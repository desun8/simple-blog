import { setActivePinia, createPinia } from 'pinia';
import { useLoginStore } from './useLoginStore';
import { vi } from 'vitest';
import { type Ref, ref } from 'vue';
import { useFetch } from '6_shared/lib/useFetch/useFetch';
import { type User } from '5_entities/User/model/types';

let doMockUseFetchResponse: {
  data: User | undefined;
  error: Ref<string>;
  isFetching: Ref<boolean>;
};

vi.mock('6_shared/lib/useFetch/useFetch', () => ({
  useFetch: vi.fn(() => ({
    post: vi.fn(() => ({
      json: vi.fn(() => doMockUseFetchResponse),
    })),
    get: vi.fn(),
  })),
}));

describe('useLoginStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('set username', () => {
    const loginStore = useLoginStore();
    loginStore.username = 'username';
    expect(loginStore.username).toEqual('username');
  });

  test('set password', () => {
    const loginStore = useLoginStore();
    loginStore.password = 'password';
    expect(loginStore.password).toEqual('password');
  });

  test('set isLoading', () => {
    const loginStore = useLoginStore();
    loginStore.isLoading = true;
    expect(loginStore.isLoading).toEqual(true);
  });

  test('set errorMsg', () => {
    const loginStore = useLoginStore();
    loginStore.errorMsg = 'error';
    expect(loginStore.errorMsg).toEqual('error');
  });

  test('success login', async () => {
    doMockUseFetchResponse = {
      data: { id: '1', username: 'admin' },
      error: ref(''),
      isFetching: ref(false),
    };

    const loginStore = useLoginStore();
    const result = await loginStore.loginByUsername();

    expect(useFetch).toHaveBeenCalledTimes(1);
    expect(useFetch).toHaveBeenCalledWith('/login');
    // TODO: Write good mock test
    // expect(useFetch().post).toHaveBeenCalledTimes(1);
    // expect(useFetch().post().json).toHaveBeenCalledTimes(1);

    expect(result).toEqual({ id: '1', username: 'admin' });
    expect(loginStore.isLoading).toBe(false);
    expect(loginStore.errorMsg).toBe('');
  });

  test('error login', async () => {
    doMockUseFetchResponse = {
      data: undefined,
      error: ref('error'),
      isFetching: ref(false),
    };

    const loginStore = useLoginStore();
    const result = await loginStore.loginByUsername();

    expect(useFetch).toHaveBeenCalledTimes(1);
    expect(useFetch).toHaveBeenCalledWith('/login');

    expect(result).toEqual(undefined);
    expect(loginStore.isLoading).toBe(false);
    expect(loginStore.errorMsg).toBe('error');
  });
});
