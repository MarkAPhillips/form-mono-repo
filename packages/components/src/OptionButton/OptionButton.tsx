import React, { forwardRef, Fragment } from 'react';

import { FieldErrorMessage } from '../FieldErrorMessage/FieldErrorMessage';
import { FieldLabel } from '../FieldLabel/FieldLabel';
import { FieldSet, Input, Label, OptionButtonContainer } from './OptionButton.styles';
import { OptionButtonProps, OptionButtonRef } from './OptionButton.types';

export const OptionButton = forwardRef<OptionButtonRef, OptionButtonProps>(({ options, name, label, defaultValue, isOptional, errorMessage }: OptionButtonProps, ref) => {
  return (
    <FieldSet>
      <FieldLabel fieldType="radio" isOptional={isOptional} label={label} name={name} />
      <OptionButtonContainer>
        {options.map((item) => (
          <Fragment key={item.id}>
            <Input type="radio" id={item.id} name={name} value={item.value} ref={ref} defaultChecked={item.value === defaultValue}/>
            <Label htmlFor={item.id}>{item.label}</Label>
          </Fragment>
        ))}
      </OptionButtonContainer>
      {errorMessage && <FieldErrorMessage errorMessage={errorMessage} />}
    </FieldSet>
  );
});

OptionButton.displayName = 'OptionButton';
