type SwitchButtonOption = {
  label: string;
  id: string;
  value: string;
}

export type SwitchButtonProps = {
  name: string;
  options: SwitchButtonOption [];
}
