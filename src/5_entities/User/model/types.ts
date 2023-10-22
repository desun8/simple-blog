import { type Ref } from 'vue';

export type User = {
  id: string;
  username: string;
  avatar?: string;
};

export type UserSchema = {
  authData: Ref<User | undefined>;
  initAuthData: () => void;
  setAuthData: (a: User) => void;
  logout: () => void;
};
