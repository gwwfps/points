import React, { Component } from 'react';
import { Tabs, Tab, Paper } from 'material-ui';
import { History } from 'react-router';
import reactMixin from 'react-mixin';

import Standings from './standings';
import { COMPLETED, PREPARATION, SIGNUPS } from '../constants/tournament-phases';

@reactMixin.decorate(History)
export default class TournamentTabs extends Component {
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
      this.renderIntake(),
      this.renderStandings(),
      this.renderAdmin()
    ].filter(tab => !!tab);
  }

  renderStandings() {
    return (
      <Tab label="Standings" value="standings" key="standings">
        <Standings tournament={this.props.tournament} />
      </Tab>
    );
  }

  renderIntake() {
    if ([COMPLETED, PREPARATION, SIGNUPS].includes(this.props.tournament.phase)) {
      return;
    }
    return (
      <Tab label="Signups" value="signups" key="signups">
        <Standings tournament={this.props.tournament} />
      </Tab>
    );
  }

  renderAdmin() {

  }

  onChange(value) {
    this.history.pushState(null, `/t/${this.props.tournament.id}/${value}`);
  }
}

