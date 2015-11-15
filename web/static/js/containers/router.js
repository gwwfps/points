import React, { Component } from 'react';
import { Redirect, Router, Route } from 'react-router';
import { connect } from 'react-redux';

import Admin from './admin';
import EditTournament from './edit-tournament';
import EditUser from './edit-user';
import Login from './login';
import Tournaments from './tournaments';
import routes from '../constants/routes';


@connect(state => ({
  user: state.user
}))
export default class AppRouter extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path={routes.root} onEnter={::this.defaultRoute} />
        <Route path={`${routes.tournaments}(/:tournamentId)(/:tab)`} component={Tournaments} onEnter={::this.requiresAuth} />
        <Route path={routes.login} component={Login} onEnter={::this.redirectAuthenticated} />
        <Route path={routes.admin} component={Admin} onEnter={::this.requiresAdmin} />
        <Route path={`${routes.admin}/tournament/(:tournamentId)`} component={EditTournament} onEnter={::this.requiresAdmin} />
        <Route path={`${routes.admin}/user/(:userId)`} component={EditUser} onEnter={::this.requiresAdmin} />
      </Router>
    );
  }

  defaultRoute(nextState, replaceState) {
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
    replaceState(null, route);
  }

  requiresAuth(nextState, replaceState) {
    if (!this.props.user.isAuthenticated) {
      replaceState(null, routes.login);
    }
  }

  requiresAdmin(nextState, replaceState) {
    const { user } = this.props;
    if (!user.isAuthenticated || !user.admin) {
      replaceState(null, routes.login);
    }
  }

  redirectAuthenticated(nextState, replaceState) {
    if (this.props.user.isAuthenticated) {
      replaceState(null, routes.root);
    }
  }
}
