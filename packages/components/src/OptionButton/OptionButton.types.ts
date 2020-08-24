type OptionButtonOption = {
  label: string;
  id: string;
  value: string;
}

export type OptionButtonProps = {
  options: OptionButtonOption [];
  name: string;
  isOptional?: boolean;
  label: string;
  errorMessage?: string;
  defaultValue?: string;
};

export type OptionButtonRef = HTMLInputElement;
