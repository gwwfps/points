import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui';

import formatDate from '../utils/date-format';


export default class SummaryCard extends Component {
  static phaseLabels = {
    0: ''
  };

  render() {
    return (
      <Card>
        <CardTitle title={this.props.tournament.name} subtitle={this.getPhaseLabel()} />
        <CardText>{this.props.tournament.notes}</CardText>
      </Card>
    );
  }

  getPhaseLabel() {
    const completed = this.props.tournament.phase > 2;
    const start = formatDate(this.props.tournament.start);

    if (completed) {
      const end = formatDate(this.props.tournament.end);
      return `Completed - Ran from ${start} to ${end}`;
    } else {
      return `In progress - Started on ${start}`;
    }
  }
}

