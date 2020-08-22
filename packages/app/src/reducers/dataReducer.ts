import { FormDataActionTypes,RESET_FORM_DATA, UPDATE_FORM_DATA } from '../actions';

const initialState: any = {};

export const data = (state = initialState, action: FormDataActionTypes) => {
  switch (action.type) {
    case UPDATE_FORM_DATA: {
      const { payload } = action;
      const { step } = payload;
      return {
        ...state,
        [step]: payload.data,
      };
    }
    case RESET_FORM_DATA:
      return initialState;
    default:
      return state;
  }
};
