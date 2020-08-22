import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createForm, resetFormData } from '../actions';
import { FormTypes } from '../config/types';


export const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFormData());
  }, []);

  const handleClick = (type: FormTypes) => {
    dispatch(createForm(type));
    history.push('/steps');
  };

  return (
    <section>
      Select workflow:
      <div>
        <button onClick={() => handleClick('type1')}>Form Type 1</button>
        <button onClick={() => handleClick('type2')}>Form Type 2</button>
      </div>
    </section>
  );
};
