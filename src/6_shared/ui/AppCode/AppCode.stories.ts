import type { Meta, StoryObj } from '@storybook/vue3';
import AppCode from './AppCode.vue';
import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
// @ts-ignore
import { Theme } from '1_app/providers/theme';

const meta = {
  title: '6_shared/AppCode',
  component: AppCode,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    default: `import type { Meta, StoryObj } from '@storybook/vue3';
    import AppCode from './AppCode.vue';
    import { ThemeDecorator } from '6_shared/config/storybook/ThemeDecorator/ThemeDecorator';
    // @ts-ignore
    import { Theme } from '1_app/providers/theme';
    
    const meta = {
      title: '6_shared/AppCode',
      component: AppCode,
      tags: ['autodocs'],
      argTypes: {
        backgroundColor: { control: 'color' },
      },
      args: {
        default: '',
      },
    } satisfies Meta<typeof AppCode>;
    
    export default meta;
    type Story = StoryObj<typeof meta>;
    
    export const Normal: Story = {};`,
  },
} satisfies Meta<typeof AppCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
