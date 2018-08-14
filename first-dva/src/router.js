import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/first' exact component={Products} />
        <Route path="/"  component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
