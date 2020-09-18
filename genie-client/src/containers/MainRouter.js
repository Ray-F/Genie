import React, {Component} from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


import DashboardPage from './pages/DashboardPage';
import ClientPage from './pages/ClientPage';
import IndexPage from './pages/IndexPage';


class MainRouter extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/client'} component={ClientPage} />
          <Route exact path={'/dashboard'} component={DashboardPage} />
          <Route path={'/'} component={IndexPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default MainRouter;