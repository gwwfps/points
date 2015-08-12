import React, { Component } from 'react';
import { Redirect, Router, Route } from 'react-router';

import PointsApp from './points-app';


export default class PointsRouter extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/(:tournamentId)(/:tabName)' component={PointsApp}>
        </Route>
      </Router>
    );
  }
}
