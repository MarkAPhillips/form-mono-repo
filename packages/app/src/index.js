import { InputText } from '@form/components';
import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles';
var App = function () { return (React.createElement(React.Fragment, null,
    React.createElement(GlobalStyle, null),
    React.createElement(InputText, { label: "First Name", name: "firstName" }))); };
var rootElement = document.getElementById('root');
render(React.createElement(App, null), rootElement);
