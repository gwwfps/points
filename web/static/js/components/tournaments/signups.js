import React, { Component } from 'react';
import { RaisedButton, FlatButton } from 'material-ui';

import ParticipantList from './participant-list';
import AddPlayers from '../admin/add-players';


export default function Signups(props) {
  var addPlayers;
  if (props.admin) {
    addPlayers = <AddPlayers users={props.users} />
  }

  return (
    <div className="panel">
      <h4>{props.tournament.participants.length} people signed up so far.</h4>
      <ParticipantList participants={props.tournament.participants} />
      {addPlayers}
    </div>
  );
}
