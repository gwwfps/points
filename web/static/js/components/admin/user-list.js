import React, { Component } from 'react';
import { List, ListItem, Avatar } from 'material-ui';

import MaterialIcon from '../material-icon';


const renderUser = function(user) {
  const avatar = <Avatar src={user.picture} />;

  return (
    <ListItem
      primaryText={user.name}
      key={user.email}
      secondaryText={user.email}
      leftAvatar={avatar}
      rightIcon={user.admin && MaterialIcon('verified_user')} />
  );
};

export default function UserList(props) {
  const listItems = props.users.map(renderUser);
  return (
    <List>
      {listItems}
    </List>
  );
}
