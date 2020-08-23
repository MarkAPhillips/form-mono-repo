import React from 'react';

import { Label,Legend } from './FieldLabel.styles';
import { FieldLabelProps } from './FieldLabel.types';

export const FieldLabel = ({ fieldType, name, label, isOptional }: FieldLabelProps) => {
  const labelValue = <>{label} {isOptional && <span>- optional</span>}</>
  if (fieldType === 'radio') {
    return (
      <Legend>{labelValue}</Legend>
    );
  }
  return (
    <Label htmlFor={name}>
      {labelValue}
    </Label>
  );
};
