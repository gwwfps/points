import React, { Component } from 'react';
import { Paper, List, ListItem } from 'material-ui';

export default class ParticipantList extends Component {
  render() {
    const listItems = this.props.participants.map(participant => {
      return (
        <ListItem primaryText={participant.name} key={participant.id} />
      );
    });
    return (
      <div className="row"><div className="six columns">
        <Paper zDepth={1}>
          <List>{listItems}</List>
        </Paper>
      </div></div>
    );
  }
}
