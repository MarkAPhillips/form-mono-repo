import { Story } from '@storybook/react';
import React from 'react';

import { OptionButton } from './OptionButton';
import { OptionButtonProps } from './OptionButton.types';

export default {
  title: 'OptionButton',
  component: OptionButton,
};

const Template: Story<OptionButtonProps> = (args) => <OptionButton {...args} />;
const options = [
  { label: 'Yes', value:'yes', id: 'yes' },
  { label: 'No', value:'no', id: 'no' },
]

export const Basic = Template.bind({});
Basic.args = { name: 'selectedField', options, label: 'Select option' };
