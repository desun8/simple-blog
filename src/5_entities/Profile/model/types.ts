import { type Country, type Currency } from '6_shared/const/common';
import { type Ref } from 'vue';

export type Profile = {
  firstname: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
};

export type ProfileSchema = {
  data?: Ref<Profile | undefined>;
  isLoading: Ref<boolean>;
  error?: Ref<string | undefined>;
  readonly: Ref<boolean>;
};
