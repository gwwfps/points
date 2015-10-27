import React, { Component } from 'react';
import { List, ListItem } from 'material-ui';

export default function UserList() {
  return (
    <List>
      <ListItem primaryText="All mail" />
      <ListItem primaryText="Trash" />
      <ListItem primaryText="Spam" />
      <ListItem primaryText="Follow up" />
    </List>
  );
}
