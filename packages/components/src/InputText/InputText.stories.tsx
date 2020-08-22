import { Story } from '@storybook/react';
import React from 'react';

import { InputText } from './InputText';
import { InputTextProps } from './InputText.types';

export default {
  title: 'InputText',
  component: InputText,
};

const Template: Story<InputTextProps> = (args) => <InputText {...args} />;

export const Basic = Template.bind({});
Basic.args = { label: 'First Name', name: 'firstName' };

