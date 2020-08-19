import React from 'react';
import { render } from 'react-dom';

import Home from './Home';
import { GlobalStyle } from './styles';

const App = () => (
  <>
    <GlobalStyle />
    <Home />
  </>
);

const rootElement = document.getElementById('root');
render(<App />, rootElement);

