import type { Meta, StoryObj } from '@storybook/vue3';
import TheNavbar from './TheNavbar.vue';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator/StoreDecorator';
import { useUserStore } from '5_entities/User';

const meta = {
  title: '3_widgets/TheNavbar',
  component: TheNavbar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
  decorators: [
    StoreDecorator(() => {
      const store = useUserStore();
      store.$patch({
        authData: undefined,
      });
    }),
  ],
} satisfies Meta<typeof TheNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Auth: Story = {
  args: {},
};
Auth.decorators = [
  StoreDecorator(() => {
    const store = useUserStore();
    store.$patch({
      authData: {
        id: '1',
        username: 'user',
      },
    });
  }),
];
