import { type Profile, ValidateProfileError } from '../types';

export const validateProfileData = (
  profile?: Profile
): ValidateProfileError[] | undefined => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { firstname, lastname, age } = profile;

  const errors: ValidateProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age) || age <= 0) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  return errors.length ? errors : undefined;
};
