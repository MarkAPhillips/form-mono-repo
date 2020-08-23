/* eslint-disable max-len */
import React from 'react';

import { FormElementBuilder } from '../FormElementBuilder';
import { FormStepProps } from '../types';

type InstructionsData = {
  roleAppliedFor: string;
  rolePrevApplied: 'yes' | 'no';
}

const Continuation = ({ formTitle, formOptions, formData }: FormStepProps<InstructionsData>) => {
  const { register, errors } = formOptions;
  return (
    <section>
      <h2>{formTitle}</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo urna molestie at elementum eu facilisis sed odio. Integer quis auctor elit sed vulputate mi sit. Quam pellentesque nec nam aliquam sem et tortor. In eu mi bibendum neque egestas. Sapien eget mi proin sed libero enim sed faucibus. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Feugiat vivamus at augue eget arcu dictum varius duis at. Purus in massa tempor nec feugiat nisl pretium fusce id. Adipiscing tristique risus nec feugiat in. Gravida rutrum quisque non tellus orci. Leo vel fringilla est ullamcorper eget nulla facilisi. Sit amet volutpat consequat mauris nunc congue. Nunc sed id semper risus in hendrerit.
        </p>
      </div>
      <FormElementBuilder fieldType="text" name="roleAppliedFor" register={register} />
      <FormElementBuilder fieldType="yesno" name="rolePrevApplied" register={register} errors={errors} rules={{ required: 'Field Required' }} />
    </section>
  );
};

export default Continuation;
