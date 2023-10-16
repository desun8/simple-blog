import type { Meta, StoryObj } from '@storybook/vue3';
import AppSkeleton from './AppSkeleton.vue';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';

const meta = {
  title: '6_shared/AppSkeleton',
  component: AppSkeleton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof AppSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};
export const Circle: Story = {
  args: {
    width: 200,
    height: 200,
    borderRadius: '50%',
  },
};

export const NormalDark: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark: Story = {
  args: {
    width: 200,
    height: 200,
    borderRadius: '50%',
  },
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
