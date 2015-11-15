import React, { Component } from 'react';
import { DropDownMenu } from 'material-ui';



export default function MainToolbar(props) {
  const menuItems = props.tournaments.map(tournament => ({ payload: tournament, text: tournament.name }));
  const selectedIndex = props.tournaments.indexOf(props.tournament);

  return (
    <DropDownMenu
      menuItems={menuItems}
      onChange={(event, selectedIndex, menuItem) => props.doSelect(menuItem.payload) }
      selectedIndex={selectedIndex} />
  );
}
