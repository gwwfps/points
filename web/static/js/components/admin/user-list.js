import React, { Component } from 'react';
import { List, ListItem, Avatar } from 'material-ui';

import MaterialIcon from '../material-icon';
import history from '../../history';

const renderUser = function(user) {
  const avatar = <Avatar src={user.picture} />;

  return (
    <ListItem
      primaryText={user.name}
      key={user.email}
      secondaryText={user.email}
      leftAvatar={avatar}
      rightIcon={user.admin && MaterialIcon('verified_user')}
      onClick={() => history.pushState(null, `/admin/user/${user.id}`)} />
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
