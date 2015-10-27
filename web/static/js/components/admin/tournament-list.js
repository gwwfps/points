import React, { Component } from 'react';
import { List, ListItem, FontIcon } from 'material-ui';

import formatPhase from '../../formatters/phase';


export default class TournamentList extends Component {
  render() {
    const listItems = this.props.tournaments.map(::this.renderItem);

    return (
      <List>
        {listItems}
      </List>
    );
  }

  renderItem(tournament) {
    const icon = (<FontIcon className="material-icons">visibility{tournament.visible ? '' : ' off'}</FontIcon>);

    return (
      <ListItem primaryText={tournament.name} key={tournament.id} secondaryText={formatPhase(tournament)} rightIcon={icon} />
    );
  }
}
