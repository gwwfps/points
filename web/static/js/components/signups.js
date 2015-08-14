import React, { Component } from 'react';
import { RaisedButton, FlatButton, Dialog } from 'material-ui';

import ParticipantList from './participant-list';


export default class Signups extends Component {
  render() {
    return (
      <div className="panel">
        <div className="u-pull-right">
          <RaisedButton label="Sign up" primary={true} disabled={!this.isActivePhase()} onClick={::this.onClickSignup} />
        </div>
        <h4>{this.props.tournament.participants.length} people signed up so far.</h4>
        <ParticipantList participants={this.props.tournament.participants} />

        <Dialog title={`Signup to ${this.props.tournament.name}`} actions={this.renderDialogActions()}
          autoDetectWindowHeight={true} autoScrollBodyContent={true} ref="dialog">
          <div>Really signup? Read the rules: <p>{this.props.tournament.rules}</p></div>
        </Dialog>
      </div>
    );
  }

  isActivePhase() {
    return this.props.tournament.phase === 0;
  }

  onClickSignup() {
    this.refs.dialog.show();
  }

  renderDialogActions() {
    return ([
      <FlatButton label="Nope" key="cancel" secondary={true} />,
      <FlatButton label="Do it" key="submit" primary={true} />
    ]);
  }
}
