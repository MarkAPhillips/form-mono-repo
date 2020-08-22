import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { updateForm, updateFormData } from '../actions';
import { formStatusSelector } from '../selectors';
import { FormActions, FormSteps } from '.';

const FormWizardContainer = styled.section`
  display: flex;
`;

const FormContainer = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
`;

export const FormWizard = () => {
  const {
    isFirstStep, isLastStep, currentStep, formTitle, componentName,
  } = useSelector(formStatusSelector);
  const formOptions = useForm<any>();
  const dispatch = useDispatch();
  const { handleSubmit } = formOptions;

  const onSubmit = (data: any, e: any) => {
    const submitButton = e.nativeEvent.submitter.id;
    if (!isLastStep || submitButton === 'previous') {
      dispatch(updateFormData(currentStep, data));
      const inc = submitButton === 'next' ? 1 : -1;
      dispatch(updateForm(currentStep + inc));
    }
    if (isLastStep && submitButton === 'next') {
      console.log('Form validated and submitted');
    }
  };

  return (
    <FormWizardContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormSteps
            component={componentName}
            step={currentStep}
            formTitle={formTitle}
            formOptions={formOptions}
          />
          <FormActions
              isFirstStep={isFirstStep}
              nextText={isLastStep ? 'Validate and Submit' : `Next: Step ${currentStep + 1}`}
            />
        </FormContainer>
      </form>
    </FormWizardContainer>
  );
};
