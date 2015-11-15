import React, { Component } from 'react';
import { Card, CardTitle, CardText, FlatButton, Dialog } from 'material-ui';

import formatPhase from '../../formatters/phase';


export default class SummaryCard extends Component {
  render() {
    return (
      <Card>
        <CardTitle title={this.props.tournament.name} subtitle={formatPhase(this.props.tournament)} />
        <CardText>{this.props.tournament.notes}</CardText>
        <CardText><FlatButton label="Show rules" onClick={::this.onClickShowRules} /></CardText>
        <Dialog title={`Rules for ${this.props.tournament.name}`} actions={[{ text: 'Close' }]}
          autoDetectWindowHeight={true} autoScrollBodyContent={true} ref="rulesDialog">
          <div>{this.props.tournament.rules}</div>
        </Dialog>
      </Card>
    );
  }

  onClickShowRules() {
    this.refs.rulesDialog.show();
  }
}

