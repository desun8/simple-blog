import type { Meta, StoryObj } from '@storybook/vue3';
import AppModal from './AppModal.vue';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';

const meta = {
  title: '6_shared/AppModal',
  component: AppModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    disabledTeleport: true,
    isOpen: true,
    default:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti itaque repudiandae fugit rerum iste, deserunt quibusdam distinctio nemo natus dignissimos modi ea ullam reprehenderit autem, labore esse fugiat qui aperiam.',
  },
} satisfies Meta<typeof AppModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
