import React from 'react';

import { FieldErrorMessage } from '../FieldErrorMessage/FieldErrorMessage';
import { FieldDecoratorContainer, FieldLabel } from './FieldDecorator.styles';
import { FieldDecoratorProps } from './FieldDecorator.types';

export const FieldDecorator = ({ label, name, errorMessage, children, isOptional }: FieldDecoratorProps) => (
  <FieldDecoratorContainer>
    <FieldLabel htmlFor={name}>
      {label} {isOptional && <span>- optional</span>}
    </FieldLabel>
    {children}
    {errorMessage && <FieldErrorMessage errorMessage={errorMessage} />}
  </FieldDecoratorContainer>
);
