import React, { Component } from 'react';
import { Tabs, Tab, Paper } from 'material-ui';

import Signups from './signups';
import Season from './season';
import Playoffs from './playoffs';


export default class StageTabs extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    const selectedIndex = isNaN(this.props.selected) ? this.props.tournament.phase : this.props.selected;

    return (
      <Paper zDepth={1}>
        <Tabs initialSelectedIndex={selectedIndex} onChange={::this.onChange} key={this.props.tournament.id}>
          <Tab label="Signups">
            <Signups tournament={this.props.tournament} />
          </Tab>
          <Tab label="Regular season">
            <Season tournament={this.props.tournament} />
          </Tab>
          <Tab label="Playoffs">
            <Playoffs tournament={this.props.tournament} />
          </Tab>
        </Tabs>
      </Paper>
    );
  }

  onChange(index) {
    this.context.router.transitionTo(`/${this.props.tournament.id}/${index}`);
  }
}

