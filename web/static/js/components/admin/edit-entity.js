import React, { Component } from 'react';
import { Paper, FlatButton, AppBar, IconButton } from 'material-ui';

import MaterialIcon from '../../components/material-icon';


export default function EditEntity(props) {
  return (
    <div className="row">
      <AppBar
        title={props.title}
        iconElementLeft={<IconButton onClick={props.doCancel}>{MaterialIcon('close')}</IconButton>}
        iconElementRight={<FlatButton label="Save" onClick={props.doSave} />} />
      <Paper zDepth={1}>
        {props.children}
      </Paper>
    </div>
  );
}
