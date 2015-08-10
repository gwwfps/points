import React, { Component } from 'react';
import { Tabs, Tab, Paper } from 'material-ui';

import Signups from './signups';
import Season from './season';
import Playoffs from './playoffs';


export default class StageTabs extends Component {
  render() {
    return (
      <Paper zDepth={1}>
        <Tabs initialSelectedIndex={this.props.tournament.phase}>
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
}

