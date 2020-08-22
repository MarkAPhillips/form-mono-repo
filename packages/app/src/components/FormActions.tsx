import React from 'react';
import styled from 'styled-components';

type FormActionsProps = {
  isFirstStep: boolean;
  nextText?: string;
  prevText?: string;
}

const FormActionsSection = styled.section`
  position: fixed;
  bottom:0;
  right:0;
  height: 50px;
  width: 100%;
  border-top: 1px solid rgb(188,188,188);
  div {
    margin-top: 4px;
  }
`;

const FormActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,.9);
  margin:0 32px;
`;

export const FormActions = ({
  isFirstStep,
  nextText = 'Next',
  prevText = 'Previous',
}: FormActionsProps) => (
  <FormActionsSection>
    <FormActionsContainer>
      <div>
        {!isFirstStep && (<button type="submit" id="previous">{prevText}</button>)}
      </div>
      <div>
        <button type="submit" id="next">{nextText}</button>
      </div>
    </FormActionsContainer>
  </FormActionsSection>
);

