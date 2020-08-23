import React, { forwardRef } from 'react';

import { FieldErrorMessage } from '../FieldErrorMessage/FieldErrorMessage';
import { FieldLabel } from '../FieldLabel/FieldLabel';
import { FieldSet, Input, Label, OptionButtonContainer } from './OptionButton.styles';
import { OptionButtonProps, OptionButtonRef } from './OptionButton.types';

export const OptionButton = forwardRef<OptionButtonRef, OptionButtonProps>(({ name, options, label, isOptional, errorMessage }: OptionButtonProps, ref) => {
  return (
    <FieldSet>
      <FieldLabel fieldType="radio" isOptional={isOptional} label={label} name={name} />
      <OptionButtonContainer>
        {options.map((item) => (
          <>
            <Input type="radio" id={item.id} name={name} value={item.value} ref={ref} />
            <Label htmlFor={item.id}>{item.label}</Label>
          </>
        ))}
      </OptionButtonContainer>
      {errorMessage && <FieldErrorMessage errorMessage={errorMessage} />}
    </FieldSet>
  );
});

OptionButton.displayName = 'OptionButton';
