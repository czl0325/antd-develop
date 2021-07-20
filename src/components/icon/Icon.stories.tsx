import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import '../../styles/index.scss';
import {action} from '@storybook/addon-actions'
import Icon from './Icon'

export default {
  title: 'Icon组件示例',
  component: Icon,
  argTypes: {

  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px 40px', boxSizing: "border-box" }}>
        <div style={{ marginBottom: '10px'}}>
          <a href="https://fontawesome.com/v5.15/icons?d=gallery&p=1&s=solid&m=free">图标参考文档</a>
        </div>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
export const icon = Template.bind({});
icon.args = {
  icon: "coffee",
  size: "lg"
}
