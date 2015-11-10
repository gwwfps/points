import React, { Component } from 'react';
import { List, ListItem, Avatar } from 'material-ui';

import MaterialIcon from '../material-icon';


export default function UserList(props) {
  const listItems = props.users.map(user => (
    <ListItem
      primaryText={user.name}
      key={user.email}
      secondaryText={user.email}
      leftAvatar={<Avatar src={user.picture} />}
      rightIcon={user.admin ? MaterialIcon('verified_user') : void 0}
      onTouchTap={() => props.doEdit(user)} />
  ));
  return (
    <List>
      {listItems}
    </List>
  );
}
