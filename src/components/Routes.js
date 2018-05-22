import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Feed from '../../src/containers/Feed';
import Profile from './Profile';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route exact path="/me" component={Profile} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
