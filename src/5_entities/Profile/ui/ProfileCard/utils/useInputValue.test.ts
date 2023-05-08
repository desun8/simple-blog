import { Country } from '5_entities/Country';
import { Currency } from '5_entities/Currency';
import { useInputValue } from './useInputValue';
import { ref } from 'vue';
import { type Profile } from '5_entities/Profile/model/types';

describe('useInputValue', () => {
  test('change value', () => {
    const profile = ref({
      firstname: 'Firstname',
      lastname: 'Lastname',
      age: 22,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
      avatar:
        'https://static.wikia.nocookie.net/evangelion/images/b/b9/Evangelion_Iron_Maiden_Portrait_SINJI1J.png',
    });

    const setter = (key: keyof Profile, value: Profile[keyof Profile]) => {
      // @ts-ignore
      profile.value[key] = value;
    };

    const firstname = useInputValue(profile, 'firstname', setter);
    expect(profile.value.firstname).toEqual('Firstname');

    firstname.value = 'Evg';
    expect(profile.value.firstname).toEqual('Evg');
  });
});
