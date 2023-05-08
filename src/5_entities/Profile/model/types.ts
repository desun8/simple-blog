import { type Country } from '5_entities/Country';
import { type Currency } from '5_entities/Currency';
import { type Ref } from 'vue';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

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
  errors: Ref<ValidateProfileError[] | undefined>;
  readonly: Ref<boolean>;
  validateErrors?: ValidateProfileError[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  fetchData: () => Promise<Ref<Profile | null>>;
  updateData: () => void;
  cancelChanges: () => void;
};
