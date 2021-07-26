import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Button from "./Button";

export default {
  title: 'Button组件示例',
  component: Button,
  argTypes: {

  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} onClick={action('clicked')}/>;
export const button = Template.bind({});
button.args = {
  genre: 'primary',
  size: 'sm',
  disabled: false,
  children: '这是一个按钮组件'
}

