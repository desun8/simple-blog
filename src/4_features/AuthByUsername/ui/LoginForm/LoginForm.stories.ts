import type { Meta, StoryObj } from '@storybook/vue3';
import LoginForm from './LoginForm.vue';
import { StoreDecorator } from '6_shared/config/storybook/StoreDecorator/StoreDecorator';
import { useLoginStore } from '../../model/useLoginStore';

const meta = {
  title: '4_features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
Primary.decorators = [
  StoreDecorator(() => {
    const store = useLoginStore();
    store.$patch({
      errorMsg: '',
      password: '',
      username: '',
      isLoading: false,
    });
  }),
];

export const WithError: Story = {
  args: {},
};
WithError.decorators = [
  StoreDecorator(() => {
    const store = useLoginStore();
    store.$patch({
      errorMsg: 'error',
      password: 'pass',
      username: 'user',
      isLoading: false,
    });
  }),
];
export const Loading: Story = {
  args: {},
};

Loading.decorators = [
  StoreDecorator(() => {
    const store = useLoginStore();
    store.$patch({
      errorMsg: '',
      password: '',
      username: '',
      isLoading: true,
    });
  }),
];
