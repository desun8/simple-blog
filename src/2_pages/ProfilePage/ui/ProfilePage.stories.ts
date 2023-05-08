import type { Meta, StoryObj } from '@storybook/vue3';
import ProfilePage from './ProfilePage.vue';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator/StoreDecorator';
import { type Profile, useProfileStore } from '5_entities/Profile';
import { Currency } from '5_entities/Currency';
import { Country } from '5_entities/Country';

const DEFAULT_DATA: Profile = {
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

const meta = {
  title: '2_pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
  decorators: [
    StoreDecorator(() => {
      const store = useProfileStore();

      store.cancelChanges = () => {
        store.$patch({ data: DEFAULT_DATA, readonly: true });
      };

      store.updateData = () => {
        store.readonly = true;
      };

      store.$patch({ data: DEFAULT_DATA });
    }),
  ],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
