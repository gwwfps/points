import React, { Component } from 'react';
import { IconButton } from 'material-ui';

import history from '../history';


export default function ModeButton(props) {
  return (
    <div className="u-pull-right">
      <IconButton
        iconClassName="material-icons"
        tooltip={props.tooltip}
        onClick={() => history.pushState(null, props.route)}>
        {props.icon}
      </IconButton>
    </div>
  );
}
