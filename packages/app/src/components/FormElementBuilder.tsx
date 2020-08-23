import { InputText, OptionButton } from '@form/components';
import React from 'react';

import { formFieldMapping } from '../config/formFieldMapping';
import { yesno } from '../config/referenceData';
import { getErrorMessage } from '../utils/errorBuilder';

type FieldElementBuilderProps = {
  fieldType: 'text' | 'yesno';
  name: string;
  errors?: any;
  rules?: any;
  register: any;
}

export const FormElementBuilder = ({ fieldType, rules, name, register, errors }: FieldElementBuilderProps) => {
  const label = formFieldMapping[name];
  const errorMessage = getErrorMessage(errors, name);
  const inputRef = rules ? register(rules) : register;
  switch (fieldType) {
    case 'text':
      return <InputText name={name} label={label} ref={inputRef} errorMessage={errorMessage} />;
    case 'yesno':
      return <OptionButton options={yesno} name={name} label={label} ref={inputRef} errorMessage={errorMessage} />;
    default:
      return null;
  }
};

