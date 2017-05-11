import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './home';

export default function () {
  return (
    <main role="application">
      <Switch>
        <Route
          path="/"
          exact
          component={Home}
        />
      </Switch>
    </main>
  );
}
