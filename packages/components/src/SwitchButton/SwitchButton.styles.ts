import styled from 'styled-components';

import { colors } from '../styles';

export const Label = styled.label`
  background: ${colors.paleGray};
  color: rgba(0, 0, 0, 0.6);
  line-height: 1;
  text-align: center;
  min-width: 60px;
  padding: 8px 16px;
  margin-right: -1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
  }
  &:first-of-type {
    border-radius: 20px 0 0 20px;
  }
  &:last-of-type {
    border-radius: 0 20px 20px 0;
  }
`;

export const Input = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
  &:checked + ${Label} {
      background: ${colors.blue};
  }
`;

export const SwitchButtonContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

