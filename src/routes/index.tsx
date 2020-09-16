import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Stats from '../pages/Stats';
import Instructions from '../pages/Instructions';
import Introduction from '../pages/Introduction';
import Stage01 from '../pages/Stage01';
import Stage02 from '../pages/Stage02';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/instructions" component={Instructions} />
    <Route path="/stats" component={Stats} />
    <Route path="/introduction" component={Introduction} />
    <Route path="/stage01" component={Stage01} />
    <Route path="/stage02" component={Stage02} />
  </Switch>
);

export default Routes;
