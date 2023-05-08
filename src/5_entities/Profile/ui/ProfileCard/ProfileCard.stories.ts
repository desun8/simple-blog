import type { Meta, StoryObj } from '@storybook/vue3';
import ProfileCard from './ProfileCard.vue';

const meta = {
  title: '5_entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      firstname: 'Firstname',
      lastname: 'Lastname',
      age: 22,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'admin',
      avatar:
        'https://static.wikia.nocookie.net/evangelion/images/b/b9/Evangelion_Iron_Maiden_Portrait_SINJI1J.png',
    },
  },
};

export const WithError: Story = {
  args: {
    hasError: true,
    isReadonly: true,
  },
};
