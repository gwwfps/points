import React, { Component } from 'react';
import { Paper, FlatButton, AppBar, IconButton, Toolbar, ToolbarGroup, RaisedButton } from 'material-ui';

import MaterialIcon from '../../components/material-icon';


export default function EditEntity(props) {
  const toolbar = props.doDelete ? (
    <Toolbar>
      <ToolbarGroup>
        <RaisedButton label="Delete" onClick={props.doDelete} />
      </ToolbarGroup>
    </Toolbar>
  ) : void 0;

  return (
    <div className="row">
      <AppBar
        title={props.title}
        iconElementLeft={<IconButton onClick={props.doCancel}>{MaterialIcon('close')}</IconButton>}
        iconElementRight={<FlatButton label="Save" onClick={props.doSave} />} />
      {toolbar}
      <Paper zDepth={1}>
        {props.children}
      </Paper>
    </div>
  );
}
