import { Story } from '@storybook/react';
import React from 'react';

import { SwitchButton } from './SwitchButton';
import { SwitchButtonProps } from './SwitchButton.types';

export default {
  title: 'SwitchButton',
  component: SwitchButton,
};

const Template: Story<SwitchButtonProps> = (args) => <SwitchButton {...args} />;
const options = [
  { label: 'Yes', value:'yes', id: 'yes' },
  { label: 'No', value:'no', id: 'no' },
]

export const Basic = Template.bind({});
Basic.args = { name: 'selectedField', options };
