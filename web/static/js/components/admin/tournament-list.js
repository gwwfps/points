import React, { Component } from 'react';
import { List, ListItem } from 'material-ui';

import { PREPARATION } from '../../constants/tournament-phases';
import formatPhase from '../../formatters/phase';
import MaterialIcon from '../material-icon';


const renderIcon = function(tournament) {
  const iconName = 'visibility' + (tournament.visible || '_off');
  return MaterialIcon(iconName);
};

const placeholderItem = (
  <ListItem primaryText="No tournament found." />
);

export default function TournamentList(props) {
  const listItems = props.tournaments.map(tournament => (
    <ListItem primaryText={tournament.name} key={tournament.id}
      secondaryText={formatPhase(tournament)} rightIcon={renderIcon(tournament)} onClick={() => props.doEdit(tournament)} />
  ));

  return (
    <List>
      {listItems.length ? listItems : placeholderItem}
    </List>
  );
}
