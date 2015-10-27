import React, { Component } from 'react';
import { DropDownMenu } from 'material-ui';
import { History } from 'react-router';
import reactMixin from 'react-mixin';

@reactMixin.decorate(History)
export default class MainToolbar extends Component {
  render() {
    const menuItems = this.props.tournaments.map(tournament => ({ payload: tournament.id, text: tournament.name }));
    const selectedIndex = this.props.tournaments.indexOf(this.props.tournament);

    return (
      <DropDownMenu menuItems={menuItems} onChange={::this.onSelectTournament} selectedIndex={selectedIndex} />
    );
  }

  onSelectTournament(e, selectedIndex, menuItem) {
    this.history.pushState(null, `/t/${menuItem.payload}`);
  }
}
