import React, { Component } from 'react';
import { Redirect, Router, Route } from 'react-router';
import { connect } from 'react-redux';

import Admin from './admin';
import Login from './login';
import Tournaments from './tournaments';


@connect(state => ({
  user: state.user
}))
class DefaultRoute extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentWillMount() {
    const { user } = this.props;

    let route;
    if (user.isAuthenticated) {
      if (user.isAdmin) {
        route = '/admin';
      } else {
        route = '/t/';
      }
    } else {
      route = '/login';
    }
    this.context.router.transitionTo(route);
  }

  render() {
    return (<span></span>);
  }
}

export default class AppRouter extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={DefaultRoute} />
        <Route path='/t/(:tournamentId)(/:tabIndex)' component={Tournaments} />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
      </Router>
    );
  }
}
