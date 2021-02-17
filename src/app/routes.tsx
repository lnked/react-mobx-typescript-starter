import React, { Fragment, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { setHistory } from 'utils/redirect';

import { Home } from 'pages/Home';

export const Example = lazy(
  () =>
    import(
      /* webpackChunkName: "example", webpackPrefetch: true */
      'pages/Example'
    ),
);

export const NoMatch = lazy(
  () =>
    import(
      /* webpackChunkName: "nomatch", webpackPrefetch: true */
      'pages/NoMatch'
    ),
);

export const routes = [
  { keyName: 'navigation.home', to: '/', component: Home, exact: true },
  { keyName: 'navigation.about', to: '/about', component: Example },
  {
    keyName: 'navigation.shop',
    to: '/shop',
    component: Home,
    path: ['/shop', '/shop/:product'],
    exact: true,
  },
];

function HistorySetter({ history }: any) {
  setHistory(history);
  return null;
}

export type RouteProps = {};

function Switcher(store: any) {
  return (
    <Fragment>
      <Route component={HistorySetter} />

      <Switch>
        <Route path="/" component={Home} exact />

        {routes.map(({ keyName, path, to, component: Component, exact = false, ...restProps }) => (
          <Route
            {...restProps}
            key={keyName}
            path={path || to}
            exact={exact}
            render={props => <Component {...store} {...props} />}
          />
        ))}

        <Route path="*" render={props => <NoMatch {...store} {...props} />} exact />
      </Switch>
    </Fragment>
  );
}

export default withRouter(Switcher);
