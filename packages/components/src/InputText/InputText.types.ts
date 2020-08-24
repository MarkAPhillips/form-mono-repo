export type InputTextProps = {
  label: string;
  errorMessage? : string;
  isOptional?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>

export type InputTextRef = HTMLInputElement
