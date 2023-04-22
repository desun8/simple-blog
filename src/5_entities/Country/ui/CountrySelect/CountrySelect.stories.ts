import type { Meta, StoryObj } from '@storybook/vue3';
import CountrySelect from './CountrySelect.vue';

const meta = {
  title: '5_entities/CountrySelect',
  component: CountrySelect,
  // tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
