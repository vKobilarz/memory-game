import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Stats from '../pages/Stats';
import Instructions from '../pages/Instructions';
import Introduction from '../pages/Introduction';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/instructions" component={Instructions} />
    <Route path="/stats" component={Stats} />
    <Route path="/introduction" component={Introduction} />
  </Switch>
);

export default Routes;
