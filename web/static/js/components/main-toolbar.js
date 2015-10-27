import React, { Component } from 'react';
import { DropDownMenu } from 'material-ui';
import { History } from 'react-router';

import history from '../history';


export default function MainToolbar(props) {
  const menuItems = props.tournaments.map(tournament => ({ payload: tournament.id, text: tournament.name }));
  const selectedIndex = props.tournaments.indexOf(props.tournament);

  return (
    <DropDownMenu
      menuItems={menuItems}
      onChange={(event, selectedIndex, menuItem) => history.pushState(null, `/t/${menuItem.payload}`)}
      selectedIndex={selectedIndex} />
  );
}
