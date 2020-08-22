import styled from 'styled-components';

import { colors } from '../styles';

export const Input = styled.input`
  border-radius: 5px;
  padding: 0.3em;
  border: 1px solid ${colors.gray};
`;

export const InputTextContainer = styled.div`
  width: 100%;
  label {
    display:block;
    margin: 4px 0;
  }
`;
