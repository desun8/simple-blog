import type { Meta, StoryObj } from '@storybook/vue3';
import TheSidebar from './TheSidebar.vue';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';

const meta = {
  title: '3_widgets/TheSidebar',
  component: TheSidebar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof TheSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
