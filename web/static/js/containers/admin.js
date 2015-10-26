import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import ModeButton from '../components/mode-button';
import TournamentTable from '../components/admin/tournament-table';


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
          <TournamentTable />
        </div>
      </div>
    );
  }
}
