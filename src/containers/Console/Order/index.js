import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import Burger from '@/components/Burger';
import configureStore from '@/redux/stores/Order/configureStore';

const store = configureStore();

const Order = () => {
  const { url } = useRouteMatch();

  return (
    <Provider store={store}>
      <Switch>
        <Route path={url} component={Burger} />
        <Redirect from={url} to={url} />
      </Switch>
    </Provider>
  );
};

export default Order;
