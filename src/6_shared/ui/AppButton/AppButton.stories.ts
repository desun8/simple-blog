import type { Meta, StoryObj } from '@storybook/vue3';
import AppButton from './AppButton.vue';
import { AppButtonTheme } from './types/AppButtonTheme';
import { AppButtonSize } from './types/AppButtonSize';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';

const meta = {
  title: '6_shared/AppButton',
  component: AppButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    default: 'Button',
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppButtonTheme.PRIMARY,
  },
};
export const Secondary: Story = {
  args: {
    theme: AppButtonTheme.SECONDARY,
  },
};
export const Clear: Story = {
  args: {
    theme: AppButtonTheme.CLEAR,
  },
};
export const ClearInverted: Story = {
  args: {
    theme: AppButtonTheme.CLEAR_INVERTED,
  },
};
export const Outline: Story = {
  args: {
    theme: AppButtonTheme.OUTLINE,
  },
};
export const OutlineDark: Story = {
  args: {
    theme: AppButtonTheme.OUTLINE,
  },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlineRed: Story = {
  args: {
    theme: AppButtonTheme.OUTLINE_RED,
  },
};
export const OutlineRedDark: Story = {
  args: {
    theme: AppButtonTheme.OUTLINE_RED,
  },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeXl: Story = {
  args: {
    theme: AppButtonTheme.OUTLINE,
    size: AppButtonSize.XL,
  },
};
export const OutlineSizeL: Story = {
  args: {
    theme: AppButtonTheme.OUTLINE,
    size: AppButtonSize.L,
  },
};
export const OutlineSizeM: Story = {
  args: {
    theme: AppButtonTheme.OUTLINE,
    size: AppButtonSize.M,
  },
};

export const Background: Story = {
  args: {
    theme: AppButtonTheme.BACKGROUND,
  },
};
export const BackgroundInverted: Story = {
  args: {
    theme: AppButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    default: '>',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};
export const SquareXl: Story = {
  args: {
    default: '>',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    size: AppButtonSize.XL,
    square: true,
  },
};
export const SquareL: Story = {
  args: {
    default: '>',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    size: AppButtonSize.L,
    square: true,
  },
};
export const SquareM: Story = {
  args: {
    default: '>',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    size: AppButtonSize.M,
    square: true,
  },
};

export const Disabled: Story = {
  args: {
    theme: AppButtonTheme.OUTLINE,
    disabled: true,
  },
};
