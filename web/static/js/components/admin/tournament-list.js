import React, { Component } from 'react';
import { List, ListItem, IconMenu, IconButton } from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';

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

const renderMenu = function(tournament, props) {
  return (
    <IconMenu iconButtonElement={<IconButton>{MaterialIcon('more_vert')}</IconButton>}>
      <MenuItem primaryText="Edit" onTouchTap={() => props.doEdit(tournament)} />
      <MenuItem primaryText="Players" />
      <MenuItem primaryText="Groups" />
      <MenuItem primaryText="Playoofs" />
    </IconMenu>
  );
};

export default function TournamentList(props) {
  const listItems = props.tournaments.map(tournament => (
    <ListItem
      primaryText={tournament.name}
      key={tournament.id}
      secondaryText={formatPhase(tournament)}
      leftIcon={renderIcon(tournament)}
      rightIconButton={renderMenu(tournament, props)}
      onTouchTap={() => props.doEdit(tournament)} />
  ));

  return (
    <List>
      {listItems.length ? listItems : placeholderItem}
    </List>
  );
}
