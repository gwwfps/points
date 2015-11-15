import React, { Component } from 'react';

export default function AddPlayers(props) {
  return (
    <div>{props.users.map(user => user.id)}</div>
  );
}
