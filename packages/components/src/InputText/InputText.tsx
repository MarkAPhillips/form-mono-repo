import React from 'react';

import { FieldDecorator } from '../FieldDecorator/FieldDecorator';
import { Input } from './InputText.styles';
import { InputTextProps } from './InputText.types';

export const InputText = ({ label, name, errorMessage, isOptional, ...props }: InputTextProps) => (
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
      {...props}
    />
  </FieldDecorator>
);

