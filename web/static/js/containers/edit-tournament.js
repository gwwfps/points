import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, FlatButton, AppBar, IconButton } from 'material-ui';

import history from '../history';
import { getTournaments, createTournament, saveTournament } from '../actions/tournaments';
import MaterialIcon from '../components/material-icon';
import TournamentForm from '../components/admin/tournament-form';

@connect(state => ({
  tournaments: state.tournaments
}))
export default class EditUser extends Component {
  componentDidMount() {
    if (!this.isNew() && !this.findTournament()) {
      this.props.dispatch(getTournaments());
    }
  }

  isNew() {
    return this.props.params.tournamentId === 'new';
  }

  findTournament() {
    return this.props.tournaments.instances.find(t => t.id === this.props.params.tournamentId);
  }

  render() {
    return (
      <div className="row">
        <AppBar
          title={(this.isNew() ? 'Add' : 'Edit') + ' Tournament'}
          iconElementLeft={<IconButton onClick={() => history.pushState(null, '/admin')}>{MaterialIcon('close')}</IconButton>}
          iconElementRight={<FlatButton label="Save" onClick={::this.saveForm} />} />
        <Paper zDepth={1}>
          <TournamentForm ref="form" tournament={this.findTournament()} />
        </Paper>
      </div>
    );
  }

  saveForm() {
    const data = this.refs.form.getData();
    if (data) {
      const action = this.isNew() ? createTournament : saveTournament;
      this.props.dispatch(action(data));
    }
  }
}
