import type { Meta, StoryObj } from '@storybook/vue3';
import CommentList from './CommentList.vue';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';

const meta = {
  title: '5_entities/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    comments: [
      {
        id: '1',
        text: 'some comment',
        articleId: '1',
        userId: '1',
        user: {
          id: 1,
          username: 'admin',
          password: 'admin',
          role: 'ADMIN',
          avatar:
            'https://static.wikia.nocookie.net/evangelion/images/b/b9/Evangelion_Iron_Maiden_Portrait_SINJI1J.png',
        },
      },
      {
        id: '2',
        text: 'some comment 2',
        articleId: '1',
        userId: '1',
        user: {
          id: 1,
          username: 'admin',
          password: 'admin',
          role: 'ADMIN',
          avatar:
            'https://static.wikia.nocookie.net/evangelion/images/b/b9/Evangelion_Iron_Maiden_Portrait_SINJI1J.png',
        },
      },
    ],
  },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
export const Empty: Story = {
  args: {
    comments: [],
  },
};
