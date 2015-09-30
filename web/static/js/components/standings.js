import React, { Component } from 'react';

import { PREPARATION, SIGNUPS, REGULAR_SEASON, PLAYOFFS, COMPLETED } from '../constants/tournament-phases';
import Signups from './signups';
import Season from './season';
import Playoffs from './playoffs';


export default class Standings extends Component {
  render() {
    switch (this.props.tournament.phase) {
      case PREPARATION:
        return (
          <div className="panel">This tournament is not publicly visible yet, publish it after everything's set-up.</div>
        );
      case SIGNUPS:
        return (
          <Signups tournament={this.props.tournament} />
        );
      default:
        return (
          <Signups tournament={this.props.tournament} />
        );
    }
  }
}
