import React, { forwardRef } from 'react';

import { FieldErrorMessage } from '../FieldErrorMessage/FieldErrorMessage';
import { FieldLabel } from '../FieldLabel/FieldLabel';
import { Input } from './InputText.styles';
import { InputTextProps, InputTextRef } from './InputText.types';

export const InputText = forwardRef<InputTextRef, InputTextProps>(({ label, errorMessage, isOptional, ...props }: InputTextProps, ref) => (
  <>
    <FieldLabel fieldType="text" label={label} isOptional={isOptional} name={name} />
    <Input
      type="text"
      name={name}
      id={name}
      ref={ref}
      {...props}
    />
    {errorMessage && <FieldErrorMessage errorMessage={errorMessage} />}
  </>
));

InputText.displayName = "InputText";

