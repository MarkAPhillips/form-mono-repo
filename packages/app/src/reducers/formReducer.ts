import { CREATE_FORM, FormActionTypes, UPDATE_FORM } from '../actions';
import { FormState } from '../config/appState';
import { formStepMapping } from '../config/formStepMapping';

const initialState: FormState = {
  formType: null,
  currentStep: 0,
  steps: [],
};

export const form = (state = initialState, action: FormActionTypes) => {
  switch (action.type) {
    case CREATE_FORM: {
      const { payload } = action;
      return {
        ...state,
        formType: payload,
        currentStep: 1,
        steps: formStepMapping[payload].steps,
      };
    }
    case UPDATE_FORM: {
      const { payload } = action;
      return {
        ...state,
        currentStep: payload,
      };
    }
    default:
      return state;
  }
};
