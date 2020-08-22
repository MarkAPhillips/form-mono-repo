import React from 'react';

import { FieldErrorMessageProps } from './FieldErrorMessage.types';
import { FieldErrorMessageContainer } from './FieldErrorMessge.styles';

export const FieldErrorMessage = ({ errorMessage }: FieldErrorMessageProps) => (
  <FieldErrorMessageContainer title={errorMessage}>
    {errorMessage}
  </FieldErrorMessageContainer>
);
