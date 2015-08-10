import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, DropDownMenu } from 'material-ui';

export default class MainToolbar extends Component {
  render() {
    const menuItems = this.props.tournaments.instances.map(tournament => ({ payload: tournament.id, text: tournament.name }));

    return (
      <Toolbar>
        <ToolbarGroup key={0} float="right">
          <DropDownMenu menuItems={menuItems} onChange={::this.onSelectTournament} />
        </ToolbarGroup>
      </Toolbar>
    );
  }

  onSelectTournament(e, selectedIndex, menuItem) {
    this.props.actions.selectTournament(menuItem.payload);
  }
}
