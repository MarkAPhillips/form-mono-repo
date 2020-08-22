export type FormState = {
  formType: string | null;
  currentStep: number;
  steps: any[];
};

// data type to be defined
export type AppState = {
  form: FormState;
  data: any;
}
