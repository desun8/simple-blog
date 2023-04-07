import type { Meta, StoryObj } from '@storybook/vue3';
import AppInput from './AppInput.vue';

const meta = {
  title: '6_shared/AppInput',
  component: AppInput,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof AppInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    placeholder: 'Input text',
    value: 'Some text',
  },
};
