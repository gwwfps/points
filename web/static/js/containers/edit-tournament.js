import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';

import { getTournaments } from '../actions/tournaments';
import TournamentForm from '../components/admin/tournament-form';

@connect(state => ({
  tournaments: state.tournaments
}))
export default class EditUser extends Component {
  componentDidMount() {
    if (!this.isNew()) {
      const tournament = this.props.tournaments.find(t => t.id === this.props.params.tournamentId);
      if (!tournament) {
        this.props.dispatch(getTournaments());
      }
    }
  }

  isNew() {
    return this.props.params.tournamentId === 'new';
  }

  render() {
    return (
      <div className="row">
        <h4>{this.isNew() ? 'Add' : 'Edit'} Tournament</h4>
        <Paper zDepth={1}>
          <TournamentForm />
        </Paper>
      </div>
    );
  }
}
