import React, { Component } from 'react';
import { List, ListItem, FontIcon } from 'material-ui';

import { PREPARATION } from '../../constants/tournament-phases';
import formatPhase from '../../formatters/phase';


const renderIcon = function(tournament) {
  const visible = tournament.phase !== PREPARATION;
  const iconName = 'visibility' + (visible || '_off');
  return (<FontIcon className="material-icons">{iconName}</FontIcon>);
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
