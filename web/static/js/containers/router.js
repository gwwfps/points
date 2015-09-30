import React, { Component } from 'react';
import { Redirect, Router, Route } from 'react-router';
import { connect } from 'react-redux';

import Admin from './admin';
import Login from './login';
import Tournaments from './tournaments';


const routes = {
  root: '/',
  tournaments: '/t/',
  login: '/login',
  admin: '/admin'
};

@connect(state => ({
  user: state.user
}))
export default class AppRouter extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path={routes.root} onEnter={::this.defaultRoute} />
        <Route path={`${routes.tournaments}(:tournamentId)(/:tabIndex)`} component={Tournaments} onEnter={::this.requiresAuth} />
        <Route path={routes.login} component={Login} onEnter={::this.redirectAuthenticated} />
        <Route path={routes.admin} component={Admin} onEnter={::this.requiresAdmin} />
      </Router>
    );
  }

  defaultRoute(nextState, transition) {
    const { user } = this.props;

    let route;
    if (user.isAuthenticated) {
      if (user.admin) {
        route = routes.admin;
      } else {
        route = routes.tournaments;
      }
    } else {
      route = routes.login;
    }
    transition.to(route);
  }

  requiresAuth(nextState, transition) {
    if (!this.props.user.isAuthenticated) {
      transition.to(routes.login);
    }
  }

  requiresAdmin(nextState, transition) {
    const { user } = this.props;
    if (!user.isAuthenticated || !user.admin) {
      transition.to(routes.login);
    }
  }

  redirectAuthenticated(nextState, transition) {
    if (this.props.user.isAuthenticated) {
      transition.to(routes.root);
    }
  }
}
