import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, DropDownMenu } from 'material-ui';

export default class MainToolbar extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  render() {
    const menuItems = this.props.tournaments.instances.map(tournament => ({ payload: tournament.id, text: tournament.name }));
    const selectedIndex = this.props.tournaments.instances.indexOf(this.props.tournament);

    return (
      <Toolbar>
        <ToolbarGroup key={0} float='right'>
          <DropDownMenu menuItems={menuItems} onChange={::this.onSelectTournament} selectedIndex={selectedIndex} />
        </ToolbarGroup>
      </Toolbar>
    );
  }

  onSelectTournament(e, selectedIndex, menuItem) {
    this.context.router.transitionTo(`/${menuItem.payload}`);
  }
}
