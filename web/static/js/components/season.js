import React, { Component } from 'react';

export default class Season extends Component {
  render() {
    return (
      <div>season: {this.props.tournament.name}</div>
    );
  }
}
