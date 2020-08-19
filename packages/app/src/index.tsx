import { InputText } from '@form/components';
import React from 'react';
import { render } from 'react-dom';

import { GlobalStyle } from './styles';


const App = () => (
  <>
    <GlobalStyle />
    <InputText label="First Name" name="firstName" />
  </>
);

const rootElement = document.getElementById('root');
render(<App />, rootElement);
