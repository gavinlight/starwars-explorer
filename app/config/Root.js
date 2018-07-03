import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Category from '../pages/Category';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cat/:category" component={Category} />
      </Switch>
    </Router>
  );
};

export default Root;

