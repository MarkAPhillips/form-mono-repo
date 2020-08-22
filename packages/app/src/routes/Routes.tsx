import React from 'react';
import { Redirect,Route, Switch } from 'react-router-dom';

import { FormWizard, Main } from '../components';

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Main />
    </Route>
    <Route exact strict path="/steps">
      <FormWizard />
    </Route>
    <Redirect to="/" />
  </Switch>
);
