import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';

import * as Actions from '../actions';
import ModeButton from '../components/mode-button';
import TournamentList from '../components/admin/tournament-list';
import UserList from '../components/admin/user-list';

@connect(state => ({
  tournaments: state.tournaments,
  user: state.user
}))
export default class Admin extends Component {
  render() {
    const actions = bindActionCreators(Actions, this.props.dispatch);

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
            <UserList />
          </Paper>
        </div>
      </div>
    );
  }
}
