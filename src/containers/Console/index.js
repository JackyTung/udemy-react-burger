import React from 'react';
import Loadable from 'react-loadable';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import NotFound from '@/components/NotFound';

const AsyncOrder = new Loadable({
  loader: () => import(/* webpackChunkName: "order" */ './Order'),
  loading: () => [],
});

const ConsoleIndex = () => {
  const { url } = useRouteMatch();

  return (
    <Switch>
      {<Route exact path={url} render={() => <Redirect to={'/console/order'} />} />}
      <Route path={`${url}/order`} component={AsyncOrder} />
      {<Route component={NotFound} />}
    </Switch>
  );
};

export default ConsoleIndex;
