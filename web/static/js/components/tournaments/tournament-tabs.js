import React, { Component } from 'react';
import { Tabs, Tab, Paper } from 'material-ui';

import Signups from './signups';
import { SIGNUPS, GROUP_STAGE, PLAYOFFS, COMPLETED } from '../../constants/tournament-phases';


const renderStandings = function(tournament) {
  if (tournament.phase === SIGNUPS) {
    return;
  }
  return (
    <Tab label="Standings" value="standings" key="standings">
    </Tab>
  );
};

const renderIntake = function(tournament) {
  return (
    <Tab label="Signups" value="signups" key="signups">
      <Signups tournament={tournament} />
    </Tab>
  );
};

const renderTabs = function(tournament) {
  return [
    renderStandings(tournament),
    renderIntake(tournament)
  ].filter(tab => !!tab);
};

export default function TournamentTabs(props) {
  const { tournament, selected } = props;

  return (
    <Paper zDepth={1}>
      <Tabs
        value={selected}
        onChange={tab => props.doSelectTab(tournament, tab)}
        key={tournament.id}>
        {renderTabs(tournament)}
      </Tabs>
    </Paper>
  );
}

