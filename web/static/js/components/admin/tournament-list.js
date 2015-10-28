import React, { Component } from 'react';
import { List, ListItem } from 'material-ui';

import { PREPARATION } from '../../constants/tournament-phases';
import formatPhase from '../../formatters/phase';
import MaterialIcon from '../material-icon';


const renderIcon = function(tournament) {
  const visible = tournament.phase !== PREPARATION;
  const iconName = 'visibility' + (visible || '_off');
  return MaterialIcon(iconName);
};

const renderItem = function(tournament) {
  return (
    <ListItem primaryText={tournament.name} key={tournament.id}
      secondaryText={formatPhase(tournament)} rightIcon={renderIcon(tournament)} />
  );
};

export default function TournamentList(props) {
  const listItems = props.tournaments.map(renderItem);

  return (
    <List>
      {listItems}
    </List>
  );
}
