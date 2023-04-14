import { type User } from '5_entities/User/model/types';
import { type Ref } from 'vue';

export type LoginSchema = {
  username: Ref<string>;
  password: Ref<string>;
  isLoading: Ref<boolean>;
  errorMsg: Ref<string>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  loginByUsername: () => Promise<Ref<User | null>>;
};
