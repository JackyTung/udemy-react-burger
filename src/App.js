import React from 'react';
//import { Router } from 'react-router';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Console from './containers/Console';

const history = createBrowserHistory();

export default () => (
  <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/console" component={Console} />
      <Redirect to="/console" />
    </Switch>
  </BrowserRouter>
);
