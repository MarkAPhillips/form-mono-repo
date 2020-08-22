import React from 'react';

import { Input, Label, SwitchButtonContainer } from './SwitchButton.styles';
import { SwitchButtonProps } from './SwitchButton.types';

export const SwitchButton = ({ name, options }: SwitchButtonProps) => {
  return (
    <SwitchButtonContainer>
      {options.map((item) => (
        <>
          <Input type="radio" id={item.id} name={name} value={item.value} />
          <Label htmlFor={item.id}>{item.label}</Label>
        </>
      ))}
    </SwitchButtonContainer>
  );
}
