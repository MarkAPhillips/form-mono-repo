import { ReactNode } from "react";

export type FieldDecoratorProps = {
  label?: string;
  name: string;
  children: ReactNode;
  errorMessage?: string;
  isOptional?: boolean;
}

export type FieldLabelProps = Pick<FieldDecoratorProps, 'name' | 'isOptional'> & {
  label: string;
};
