import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';

import { getUsers, createUser, saveUser } from '../actions/users';
import { cancelEdit } from '../actions/route';
import EditEntity from '../components/admin/edit-entity';
import UserForm from '../components/admin/user-form';

@connect(state => ({
  users: state.users
}))
export default class EditUser extends Component {
  componentDidMount() {
    if (!this.isNew() && !this.findUser()) {
      this.props.dispatch(getUsers());
    }
  }

  isNew() {
    return this.props.params.userId === 'new';
  }

  findUser() {
    return this.props.users.find(user => user.id === this.props.params.userId);
  }

  render() {
    return (
      <EditEntity
        title={(this.isNew() ? 'Add' : 'Edit') + ' User'}
        doSave={::this.saveForm}
        doCancel={() => this.props.dispatch(cancelEdit())}>
        <UserForm ref="form" user={this.findUser()} />
      </EditEntity>
    );
  }

  saveForm() {
    const data = this.refs.form.getData();
    if (data) {
      const action = this.isNew() ? createUser : saveUser;
      this.props.dispatch(action(data));
    }
  }
}
