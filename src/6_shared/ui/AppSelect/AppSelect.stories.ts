import type { Meta, StoryObj } from '@storybook/vue3';
import AppSelect from './AppSelect.vue';

const meta = {
  title: '6_shared/AppSelect',
  component: AppSelect,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: 'Укажите значение',
    options: [
      { value: '123', label: 'Первый пункт' },
      { value: '1234', label: 'Второй пункт' },
    ],
  },
} satisfies Meta<typeof AppSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Выберите значение',
  },
};

export const WithoutLabel: Story = {
  args: {
    label: '',
  },
};
