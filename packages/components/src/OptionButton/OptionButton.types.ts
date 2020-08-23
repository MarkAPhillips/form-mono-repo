type OptionButtonOption = {
  label: string;
  id: string;
  value: string;
}

export type OptionButtonProps = {
  name: string;
  options: OptionButtonOption [];
  isOptional?: boolean;
  label: string;
  errorMessage?: string;
}

export type OptionButtonRef = HTMLInputElement;
