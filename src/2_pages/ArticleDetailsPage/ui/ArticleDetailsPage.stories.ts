import type { Meta, StoryObj } from '@storybook/vue3';
import ArticleDetailsPage from './ArticleDetailsPage.vue';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';

const meta = {
  title: '2_pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof ArticleDetailsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
