import type { Meta, StoryObj } from '@storybook/vue3';
import CurrencySelect from './CurrencySelect.vue';

const meta = {
  title: '5_entities/CurrencySelect',
  component: CurrencySelect,
  // tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
