import { isPlainObject } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

import { formFieldMapping } from '../../config/formFieldMapping';
import { formDataSelector } from '../../selectors';

type ReviewProps = {
  formTitle: string;
}

const getValue = (step: any, field: any) => {
  const fieldValue = step[field];
  if (isPlainObject(fieldValue)) {
    // Assume is from Select List so return the value
    return fieldValue.value;
  }
  return fieldValue;
};

const Review = ({ formTitle }: ReviewProps) => {
  const formData = useSelector(formDataSelector);
  return (
    <section>
      <h2>{formTitle}</h2>
      <div>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <div>
              Step -
              {' '}
              {key}
            </div>
            {Object.keys(formData[key]).map((item) => (
              <div key={item}>
                {formFieldMapping[item] || 'Not mapped'}
                {' '}
                -
                {' '}
                {getValue(formData[key], item)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
