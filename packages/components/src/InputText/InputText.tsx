import React, { forwardRef } from 'react';

import { FieldDecorator } from '../FieldDecorator/FieldDecorator';
import { Input } from './InputText.styles';
import { InputTextProps } from './InputText.types';

type Ref = HTMLInputElement;

export const InputText = forwardRef<Ref, InputTextProps>(({ label, name, errorMessage, isOptional, maxLength = 50 }: InputTextProps, ref) => (
  <FieldDecorator
    label={label}
    name={name}
    errorMessage={errorMessage}
    isOptional={isOptional}
  >
    <Input
      type="text"
      name={name}
      id={name}
      ref={ref}
      maxLength={maxLength}
    />
  </FieldDecorator>
));

InputText.displayName="InputText";

