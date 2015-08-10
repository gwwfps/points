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
export default class PointsApp extends Component {
  render() {
    const { tournaments, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);

    const tournament = tournaments.selected;

    return (
      <div>
        <div className="row"><MainToolbar tournaments={tournaments} actions={actions} /></div>
        <div className="row"><SummaryCard tournament={tournament} /></div>
        <div className="row"><StageTabs tournament={tournament} /></div>
      </div>
    );
  }
}
