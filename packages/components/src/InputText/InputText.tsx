import React from 'react';
import styled from 'styled-components';

import { InputTextProps } from './InputText.types';

export const Input = styled.input`
  border-radius: 5px;
  padding: 0.3em;
  border: 1px solid rgb(188,188,188);
`;

const InputTextContainer = styled.div`
  width: 100%;
  label {
    display:block;
    margin: 4px 0;
  }
`;

export const InputText = ({ label, name, ...props }: InputTextProps) => (
  <InputTextContainer>
    <label htmlFor={name}>
      {label}
    </label>
    <Input
      type="text"
      name={name}
      id={name}
      {...props}
    />
  </InputTextContainer>
);

