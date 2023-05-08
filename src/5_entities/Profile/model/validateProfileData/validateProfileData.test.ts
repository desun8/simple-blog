import { Country } from '5_entities/Country';
import { Currency } from '5_entities/Currency';
import { type Profile, ValidateProfileError } from '../types';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData', () => {
  test('invalid no data', () => {
    expect(validateProfileData()).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('invalid firstname', () => {
    const profile: Profile = { ...profileData, firstname: '' };
    expect(validateProfileData(profile)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
  test('invalid lastname', () => {
    const profile: Profile = { ...profileData, lastname: '' };
    expect(validateProfileData(profile)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('invalid age - empty', () => {
    // @ts-ignore
    const profile: Profile = { ...profileData, age: '' };
    expect(validateProfileData(profile)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('invalid age - not integer', () => {
    const profile: Profile = { ...profileData, age: 1.5 };
    expect(validateProfileData(profile)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('invalid age - zero or bellow ', () => {
    const profile: Profile = { ...profileData, age: 0 };
    expect(validateProfileData(profile)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);

    profile.age = -5;
    expect(validateProfileData(profile)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('invalid firstname and age', () => {
    const profile: Profile = { ...profileData, firstname: '', age: 0 };
    expect(validateProfileData(profile)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('valid', () => {
    expect(validateProfileData(profileData)).toBe(undefined);
  });
});
