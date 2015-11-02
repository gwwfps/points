import React, { Component } from 'react';
import { TextField, DatePicker, SelectField, Toggle } from 'material-ui';

import { LABELS } from '../../constants/tournament-phases';


const menuItems = [{}].concat(Object.keys(LABELS).map(value => {
    return { payload: value, text: LABELS[value] };
}));

export default class TournamentForm extends Component {
  render() {
    return (
      <div className="panel">
        <div>
          <TextField floatingLabelText="Name" />
        </div>
        <div>
          <TextField floatingLabelText="Description" multiLine={true} />
        </div>
        <div>
          <TextField floatingLabelText="Rules" multiLine={true} />
        </div>
        <div>
          <DatePicker floatingLabelText="Start Date" />
        </div>
        <div>
          <SelectField floatingLabelText="Phase" menuItems={menuItems} />
        </div>
        <div>
          <Toggle label="Visible" labelPosition="right" />
        </div>
      </div>
    );
  }
}
