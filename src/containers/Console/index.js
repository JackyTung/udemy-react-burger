import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import Burger from '@/components/Burger';
import CheckoutSummary from '@/components/CheckoutSummary';
import NotFound from '@/components/NotFound';

const ConsoleIndex = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      {<Route exact path={url} render={() => <Redirect to={'/console/burger'} />} />}
      <Route path={`${url}/burger`} component={Burger} />
      <Route path={`${url}/checkout`} component={CheckoutSummary} />
      {<Route component={NotFound} />}
    </Switch>
  );
};

export default ConsoleIndex;
