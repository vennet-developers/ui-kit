import { ComponentStory, ComponentMeta } from '@storybook/react';
import Test from './Test';

export default {
  title: 'Test',
  component: Test,
  argTypes: {
    theme: { control: 'radio' },
  },
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
};
