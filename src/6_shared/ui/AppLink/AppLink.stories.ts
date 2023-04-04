import type { Meta, StoryObj } from '@storybook/vue3';
import AppLink from './AppLink.vue';
import { AppLinkTheme } from './types/AppLinkTheme';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';

const meta = {
  title: '6_shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    default: 'Link',
    to: '/',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};
export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};
export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
