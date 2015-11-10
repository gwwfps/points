import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../history';
import { getTournaments, createTournament, saveTournament, deleteTournament } from '../actions/tournaments';
import { cancelEdit } from '../actions/route';
import EditEntity from '../components/admin/edit-entity';
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
      <EditEntity
        title={(this.isNew() ? 'Add' : 'Edit') + ' Tournament'}
        doSave={::this.saveForm}
        doCancel={() => this.props.dispatch(cancelEdit())}
        doDelete={!this.isNew() && ::this.deleteTournament}>
        <TournamentForm ref="form" tournament={this.findTournament()} />
      </EditEntity>
    );
  }

  deleteTournament() {
    this.props.dispatch(deleteTournament(this.findTournament()))
  }

  saveForm() {
    const data = this.refs.form.getData();
    if (data) {
      const action = this.isNew() ? createTournament : saveTournament;
      this.props.dispatch(action(data));
    }
  }
}
