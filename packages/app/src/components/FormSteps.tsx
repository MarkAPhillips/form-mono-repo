import React, { lazy, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { formStepDataSelector } from '../selectors';
import { componentMapper } from './steps/componentMapper';

export const FormSteps = ({ component, step, formTitle, formOptions }: any) => {
  const func = componentMapper[component];
  if (!func) {
    // eslint-disable-next-line no-console
    console.warn(`Component ${component} for step ${step} not yet implemented or configured.`);
    return null;
  }

  const FormStep = useMemo(() => lazy(func), [component]);
  const formData = useSelector(formStepDataSelector);
  return (
    <Suspense fallback={<div>Form Loading...</div>}>
      <FormStep formTitle={formTitle} formOptions={formOptions} formData={formData} />
    </Suspense>
  );
};
