import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';

import ModeButton from '../components/mode-button';
import TournamentList from '../components/admin/tournament-list';
import UserList from '../components/admin/user-list';
import { getUsers } from '../actions/users';

@connect(state => ({
  tournaments: state.tournaments,
  user: state.user,
  users: state.users
}))
export default class Admin extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  render() {
    return (
      <div>
        <div className='row'>
          <ModeButton route="/t/" tooltip="Tournaments" icon="list" />
        </div>
        <div className='row'>
          <h4>Tournaments</h4>
          <Paper zDepth={1}>
            <TournamentList tournaments={this.props.tournaments.instances} />
          </Paper>
        </div>
        <div className='row'>
          <h4>Users</h4>
          <Paper zDepth={1}>
            <UserList users={this.props.users} />
          </Paper>
        </div>
      </div>
    );
  }
}
