import type { Meta, StoryObj } from '@storybook/vue3';
import AppText from './AppText.vue';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '1_app/providers/theme';
import { AppTextTheme } from './types/AppTextTheme';
import { AppTextAlign } from './types/AppTextAlign';

const meta = {
  title: '6_shared/AppText',
  component: AppText,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
  },
} satisfies Meta<typeof AppText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const PrimaryDark: Story = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
  args: {
    theme: AppTextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: { text: '' },
};
export const OnlyTitleDark: Story = {
  args: { text: '' },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText: Story = {
  args: { title: '' },
};
export const OnlyTextDark: Story = {
  args: { title: '' },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AlignCenter: Story = {
  args: {
    align: AppTextAlign.CENTER,
  },
};
export const AlignRight: Story = {
  args: {
    align: AppTextAlign.RIGHT,
  },
};
