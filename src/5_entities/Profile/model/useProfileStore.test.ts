import { Country } from '5_entities/Country';
import { setActivePinia, createPinia } from 'pinia';
import { Currency } from '5_entities/Currency';
import { useProfileStore } from './useProfileStore';
import { ValidateProfileError, type Profile } from './types';
import { ref, type Ref } from 'vue';
import { useFetch } from '6_shared/lib/useFetch/useFetch';

let doMockUseFetchResponse: {
  data: Ref<Profile | undefined>;
  error: Ref<string>;
  isFetching: Ref<boolean>;
};

vi.mock('6_shared/lib/useFetch/useFetch', () => ({
  useFetch: vi.fn(() => ({
    post: vi.fn(() => ({
      json: vi.fn(() => doMockUseFetchResponse),
    })),
    get: vi.fn(() => ({
      json: vi.fn(() => doMockUseFetchResponse),
    })),
    put: vi.fn(() => ({
      json: vi.fn(() => doMockUseFetchResponse),
    })),
  })),
}));

const profileData = {
  firstname: 'Firstname',
  lastname: 'Lastname',
  age: 22,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar:
    'https://static.wikia.nocookie.net/evangelion/images/b/b9/Evangelion_Iron_Maiden_Portrait_SINJI1J.png',
};

describe('useProfileStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('get values', () => {
    const profileStore = useProfileStore();
    expect({
      data: profileStore.data,
      isLoading: profileStore.isLoading,
      errors: profileStore.errors,
      readonly: profileStore.readonly,
    }).toEqual({
      data: undefined,
      isLoading: false,
      errors: undefined,
      readonly: true,
    });
  });
  test('fetch data', async () => {
    doMockUseFetchResponse = {
      data: ref(profileData),
      error: ref(''),
      isFetching: ref(false),
    };

    const profileStore = useProfileStore();
    await profileStore.fetchData();

    expect(useFetch).toHaveBeenCalledTimes(1);
    expect(useFetch).toHaveBeenCalledWith('/profile');

    expect(profileStore.data).toEqual(profileData);
    expect(profileStore.isLoading).toBe(false);
    expect(profileStore.errors).toBe(undefined);
  });

  test('fetch data with server error', async () => {
    doMockUseFetchResponse = {
      data: ref(profileData),
      error: ref('error'),
      isFetching: ref(false),
    };

    const profileStore = useProfileStore();
    await profileStore.fetchData();

    expect(useFetch).toHaveBeenCalledTimes(1);
    expect(useFetch).toHaveBeenCalledWith('/profile');

    expect(profileStore.data).toBe(undefined);
    expect(profileStore.isLoading).toBe(false);
    expect(profileStore.errors).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('update data', async () => {
    const updateProfileData: Profile = {
      ...profileData,
      firstname: 'Tom',
    };

    doMockUseFetchResponse = {
      data: ref(updateProfileData),
      error: ref(''),
      isFetching: ref(false),
    };

    const profileStore = useProfileStore();

    profileStore.data = profileData;
    expect(profileStore.data).toEqual(profileData);

    profileStore.data.firstname = 'Tom';

    // eslint-disable-next-line @typescript-eslint/await-thenable, @typescript-eslint/no-confusing-void-expression
    await profileStore.updateData();
    expect(useFetch).toHaveBeenCalledTimes(1);
    expect(useFetch).toHaveBeenCalledWith('/profile');

    expect(profileStore.data).toEqual(updateProfileData);
    expect(profileStore.isLoading).toBe(false);
    expect(profileStore.errors).toEqual(undefined);
  });

  test('update data with validation error', async () => {
    const updateProfileData: Profile = {
      ...profileData,
      firstname: '',
      age: -1,
    };

    doMockUseFetchResponse = {
      data: ref(updateProfileData),
      error: ref(''),
      isFetching: ref(false),
    };

    const profileStore = useProfileStore();

    profileStore.data = profileData;
    expect(profileStore.data).toEqual(profileData);

    // eslint-disable-next-line @typescript-eslint/await-thenable, @typescript-eslint/no-confusing-void-expression
    await profileStore.updateData();
    expect(useFetch).toHaveBeenCalledTimes(1);
    expect(useFetch).toHaveBeenCalledWith('/profile');

    expect(profileStore.data).toEqual(updateProfileData);
    expect(profileStore.isLoading).toBe(false);
    expect(profileStore.errors).toEqual(undefined);
  });

  test('cancel changes', async () => {
    const updateProfileData: Profile = {
      ...profileData,
      firstname: 'Tom',
    };

    doMockUseFetchResponse = {
      data: ref(profileData),
      error: ref(''),
      isFetching: ref(false),
    };

    const profileStore = useProfileStore();

    await profileStore.fetchData();
    expect(profileStore.data).toEqual(profileData);

    profileStore.data!.firstname = 'Tom';
    expect(profileStore.data).toEqual(updateProfileData);

    profileStore.cancelChanges();
    expect(profileStore.data).toEqual(profileData);
  });
});
