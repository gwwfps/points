import React, { Component } from 'react';
import { Tabs, Tab, Paper } from 'material-ui';

import history from '../history';
import Standings from './standings';
import { COMPLETED, PREPARATION, SIGNUPS } from '../constants/tournament-phases';


const renderStandings = function(tournament) {
  return (
    <Tab label="Standings" value="standings" key="standings">
      <Standings tournament={tournament} />
    </Tab>
  );
};

const renderIntake = function(tournament) {
  if ([COMPLETED, PREPARATION, SIGNUPS].includes(tournament.phase)) {
    return;
  }
  return (
    <Tab label="Signups" value="signups" key="signups">
      <Standings tournament={tournament} />
    </Tab>
  );
};

const renderAdmin = function(tournament) {

};

const renderTabs = function(tournament) {
  return [
    renderIntake(tournament),
    renderStandings(tournament),
    renderAdmin(tournament)
  ].filter(tab => !!tab);
};

export default function TournamentTabs(props) {
  const selectedIndex = isNaN(props.selected) ? props.tournament.phase : props.selected;

  return (
    <Paper zDepth={1}>
      <Tabs
        initialSelectedIndex={selectedIndex}
        onChange={value => history.pushState(null, `/t/${props.tournament.id}/${value}`)}
        key={props.tournament.id}>
        {renderTabs(props.tournament)}
      </Tabs>
    </Paper>
  );
}

