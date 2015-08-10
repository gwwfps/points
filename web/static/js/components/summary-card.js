import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui';

export default class SummaryCard extends Component {
  render() {
    return (
      <Card>
        <CardTitle title={this.props.tournament.name} subtitle="subtitle" />
        <CardText>{this.props.tournament.notes}</CardText>
      </Card>
    );
  }
}

