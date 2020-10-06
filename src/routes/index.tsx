import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Stats from '../pages/Stats';
import Instructions from '../pages/Instructions';
import Introduction from '../pages/Introduction';
import Wood01 from '../pages/Wood01';
import Paper01 from '../pages/Paper01';
import Glass01 from '../pages/Glass01';
import Iron01 from '../pages/Iron01';
import Plastic01 from '../pages/Plastic01';
import Wood02 from '../pages/Wood02';
import Paper02 from '../pages/Paper02';
import Glass02 from '../pages/Glass02';
import Iron02 from '../pages/Iron02';
import Plastic02 from '../pages/Plastic02';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/instructions" component={Instructions} />
    <Route path="/stats" component={Stats} />
    <Route path="/introduction" component={Introduction} />
    <Route path="/wood01" component={Wood01} />
    <Route path="/paper01" component={Paper01} />
    <Route path="/glass01" component={Glass01} />
    <Route path="/iron01" component={Iron01} />
    <Route path="/plastic01" component={Plastic01} />
    <Route path="/wood02" component={Wood02} />
    <Route path="/paper02" component={Paper02} />
    <Route path="/glass02" component={Glass02} />
    <Route path="/iron02" component={Iron02} />
    <Route path="/plastic02" component={Plastic02} />
  </Switch>
);

export default Routes;
