import { type Country } from '5_entities/Country';
import { type Currency } from '5_entities/Currency';
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
  data: Ref<Profile | undefined>;
  isLoading: Ref<boolean>;
  errorMsg: Ref<string>;
  readonly: Ref<boolean>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  fetchData: () => Promise<Ref<Profile | null>>;
  updateData: () => void;
  cancelChanges: () => void;
};
