import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    fontSize: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a text component',
  color: 'black',
  fontSize: '16px',
};
