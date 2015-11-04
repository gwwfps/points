import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, FlatButton, AppBar, IconButton } from 'material-ui';

import history from '../history';
import { getTournaments, createTournament } from '../actions/tournaments';
import MaterialIcon from '../components/material-icon';
import TournamentForm from '../components/admin/tournament-form';

@connect(state => ({
  tournaments: state.tournaments
}))
export default class EditUser extends Component {
  componentWillMount() {
    if (!this.isNew()) {
      this.tournament = this.props.tournaments.instances.find(t => t.id === this.props.params.tournamentId);
    }
  }

  isNew() {
    return this.props.params.tournamentId === 'new';
  }

  render() {
    return (
      <div className="row">
        <AppBar
          title={(this.isNew() ? 'Add' : 'Edit') + ' Tournament'}
          iconElementLeft={<IconButton onClick={() => history.pushState(null, '/admin')}>{MaterialIcon('close')}</IconButton>}
          iconElementRight={<FlatButton label="Save" onClick={::this.saveForm} />} />
        <Paper zDepth={1}>
          <TournamentForm ref="form" tournament={this.tournament} />
        </Paper>
      </div>
    );
  }

  saveForm() {
    const data = this.refs.form.getData();
    if (data) {
      this.props.dispatch(createTournament(data));
    }
  }
}
