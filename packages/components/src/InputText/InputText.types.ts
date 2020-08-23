export type InputTextProps = {
  label: string;
  name: string;
  errorMessage? : string;
  isOptional?: boolean;
  maxLength?: number;
}

export type InputTextRef = HTMLInputElement
