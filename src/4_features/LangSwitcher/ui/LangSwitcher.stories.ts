import type { Meta, StoryObj } from '@storybook/vue3';
import LangSwitcher from './LangSwitcher.vue';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';

const meta = {
  title: '4_features/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
