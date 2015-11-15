import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TournamentsActions from '../actions/tournaments';
import MainToolbar from '../components/tournaments/main-toolbar';
import TournamentTabs from '../components/tournaments/tournament-tabs';
import SummaryCard from '../components/tournaments/summary-card';
import ModeButton from '../components/mode-button';


@connect(state => ({
  tournaments: state.tournaments,
  user: state.user
}))
export default class Tournaments extends Component {
  componentDidMount() {
    this.props.dispatch(TournamentsActions.getTournaments());
  }

  render() {
    const { tournaments, user, dispatch, params } = this.props;

    if (!tournaments.length) {
      return <div>{this.renderAdminButton()}</div>;
    }

    const actions = bindActionCreators(TournamentsActions, dispatch);

    const tournament = tournaments.find(tournament => tournament.id === params.tournamentId) || tournaments[0];

    return (
      <div>
        {this.renderAdminButton()}
        <div className="row"><MainToolbar tournaments={tournaments} tournament={tournament} doSelect={actions.selectTournament} /></div>
        <div className="row"><SummaryCard tournament={tournament} /></div>
        <div className="row">
          <TournamentTabs
            tournament={tournament}
            user={this.props.user}
            selected={params.tab}
            doSelectTab={actions.selectTournamentTab}
            isAdmin={user.admin} />
        </div>
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
}
