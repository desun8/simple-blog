import type { Meta, StoryObj } from '@storybook/vue3';
import UserAvatar from './UserAvatar.vue';

const meta = {
  title: '6_shared/UserAvatar',
  component: UserAvatar,
  // tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    src: 'https://static.wikia.nocookie.net/evangelion/images/b/b9/Evangelion_Iron_Maiden_Portrait_SINJI1J.png',
  },
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Large: Story = {
  args: { size: 200 },
};
