import { formFieldMapping } from '../config/formFieldMapping';
import { getErrorMessage } from './errorBuilder';

export const formDefaults = (name: string, register: any, errors?: any, rules?: any) => {
  const label = formFieldMapping[name];
  const errorMessage = getErrorMessage(errors, name);
  const ref = rules ? register(rules) : register;
  return { ref, label, errorMessage , name };
};
