import React, { Component } from 'react';
import { Card, CardTitle, CardText, FlatButton, Dialog } from 'material-ui';

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
        <CardText><FlatButton label="Show rules" onClick={::this.onClickShowRules} /></CardText>
        <Dialog title={`Rules for ${this.props.tournament.name}`} actions={[{ text: 'Close' }]}
          autoDetectWindowHeight={true} autoScrollBodyContent={true} ref="rulesDialog">
          <div>{this.props.tournament.rules}</div>
        </Dialog>
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

  onClickShowRules() {
    this.refs.rulesDialog.show();
  }
}

