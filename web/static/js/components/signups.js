import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

export default class Signups extends Component {
  render() {
    return (
      <div className="panel">
        <RaisedButton label="Sign up" primary={true} />
      </div>
    );
  }
}