import React from 'react';
import { render } from 'react-dom';

import Home from './Home';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './styles';

const App = () => (
    <>
        <GlobalStyle />
        <Home />
    </>
);

const rootElement = document.getElementById('root');
render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
