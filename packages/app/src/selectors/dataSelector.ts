import { createSelector } from 'reselect';

import { AppState } from '../config/appState';
import { formSelector } from '.';

export const formDataSelector = (state: AppState) => state.data;

export const formStepDataSelector = createSelector(formSelector, formDataSelector,
  (form, data) => data[form.currentStep] || {});
