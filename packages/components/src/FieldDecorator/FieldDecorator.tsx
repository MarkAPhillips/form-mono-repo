import React from 'react';

import { FieldErrorMessage } from '../FieldErrorMessage/FieldErrorMessage';
import { FieldDecoratorContainer, FieldLabel } from './FieldDecorator.styles';
import { FieldDecoratorProps, FieldLabelProps } from './FieldDecorator.types';

const Label = ({ name, label, isOptional }: FieldLabelProps) => (
  <FieldLabel htmlFor={name}>
    {label} {isOptional && <span>- optional</span>}
  </FieldLabel>
);

export const FieldDecorator = ({ label, name, errorMessage, children, isOptional }: FieldDecoratorProps) => (
  <FieldDecoratorContainer>
    {label && <Label label={label} name={name} isOptional={isOptional} />}
    {children}
    {errorMessage && <FieldErrorMessage errorMessage={errorMessage} />}
  </FieldDecoratorContainer>
);
