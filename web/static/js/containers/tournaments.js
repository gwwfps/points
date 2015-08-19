import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import MainToolbar from '../components/main-toolbar';
import StageTabs from '../components/stage-tabs';
import SummaryCard from '../components/summary-card';


@connect(state => ({
  tournaments: state.tournaments
}))
export default class Tournaments extends Component {
  render() {
    const { tournaments, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    const tournament = this.findSelectedTournament(tournaments);

    return (
      <div>
        <div className="row"><MainToolbar tournaments={tournaments} tournament={tournament} actions={actions} /></div>
        <div className="row"><SummaryCard tournament={tournament} /></div>
        <div className="row"><StageTabs tournament={tournament} selected={parseInt(this.props.params.tabIndex, 10)} /></div>
      </div>
    );
  }

  findSelectedTournament(tournaments) {
    return tournaments.instances.find(tournament => (tournament.id === parseInt(this.props.params.tournamentId, 10))) || tournaments.instances[0];
  }
}
