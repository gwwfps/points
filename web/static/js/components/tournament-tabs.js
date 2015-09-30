import React, { Component } from 'react';
import { Tabs, Tab, Paper } from 'material-ui';

import Standings from './standings';
import { COMPLETED, PREPARATION, SIGNUPS } from '../constants/tournament-phases';


export default class TournamentTabs extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    const selectedIndex = isNaN(this.props.selected) ? this.props.tournament.phase : this.props.selected;

    return (
      <Paper zDepth={1}>
        <Tabs initialSelectedIndex={selectedIndex} onChange={::this.onChange} key={this.props.tournament.id}>
          {this.renderTabs()}
        </Tabs>
      </Paper>
    );
  }

  renderTabs() {
    return [
      this.renderStandings(),
      this.renderIntake(),
      this.renderAdmin()
    ].filter(tab => !!tab);
  }

  renderStandings() {
    return (
      <Tab label="Standings" key="standings">
        <Standings tournament={this.props.tournament} />
      </Tab>
    );
  }

  renderIntake() {
    if ([COMPLETED, PREPARATION, SIGNUPS].includes(this.props.tournament.phase)) {
      return;
    }
    return (
      <Tab label="Standings" key="standings">
        <Standings tournament={this.props.tournament} />
      </Tab>
    );
  }

  renderAdmin() {

  }

  onChange(index) {
    this.context.router.transitionTo(`/t/${this.props.tournament.id}/${index}`);
  }
}

