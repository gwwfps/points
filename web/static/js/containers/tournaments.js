import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IconButton } from 'material-ui';

import * as TournamentsActions from '../actions/tournaments';
import MainToolbar from '../components/main-toolbar';
import TournamentTabs from '../components/tournament-tabs';
import SummaryCard from '../components/summary-card';
import ModeButton from '../components/mode-button';


@connect(state => ({
  tournaments: state.tournaments,
  user: state.user
}))
export default class Tournaments extends Component {
  render() {
    const { tournaments, dispatch } = this.props;
    const actions = bindActionCreators(TournamentsActions, dispatch);

    const tournament = this.findSelectedTournament(tournaments);

    return (
      <div>
        {this.renderAdminButton()}
        <div className="row"><MainToolbar tournaments={tournaments.instances} tournament={tournament} actions={actions} /></div>
        <div className="row"><SummaryCard tournament={tournament} /></div>
        <div className="row"><TournamentTabs tournament={tournament} user={this.props.user} selected={parseInt(this.props.params.tabIndex, 10)} /></div>
      </div>
    );
  }

  renderAdminButton() {
    if (!this.props.user.admin) {
      return;
    }
    return (
      <ModeButton route="/admin" tooltip="Admin Panel" icon="dashboard" />
    );
  }

  findSelectedTournament(tournaments) {
    return tournaments.instances.find(tournament => (tournament.id === parseInt(this.props.params.tournamentId, 10))) || tournaments.instances[0];
  }
}
