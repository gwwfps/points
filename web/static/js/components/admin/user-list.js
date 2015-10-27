import React, { Component } from 'react';
import { List, ListItem } from 'material-ui';

export default class UserList extends Component {
  render() {
    return (
      <List>
        <ListItem primaryText="All mail" />
        <ListItem primaryText="Trash" />
        <ListItem primaryText="Spam" />
        <ListItem primaryText="Follow up" />
      </List>
    );
  }
}
