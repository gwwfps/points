import React, { Component } from 'react';
import { TextField, DatePicker, SelectField } from 'material-ui';
import LinkStateMixin from 'react-addons-linked-state-mixin';
import ReactMixin from 'react-mixin';
import moment from 'moment';

import { LABELS } from '../../constants/tournament-phases';
import MaterialIcon from '../material-icon';


const menuItems = Object.keys(LABELS).map(value => {
    return { payload: parseInt(value, 10), text: LABELS[value] };
});

const visibleOptions = [
  { payload: true, text: 'Visible' },
  { payload: false, text: 'Hidden' }
];

@ReactMixin.decorate(LinkStateMixin)
export default class TournamentForm extends Component {
  state = { errors: {} };

  componentWillMount() {
    this.updateStateTournament(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateStateTournament(nextProps);
  }

  updateStateTournament(props) {
    if (props.tournament) {
      const tournament = {...props.tournament};
      tournament.start_date = moment(tournament.start_date).toDate();
      this.setState(tournament);
    }
  }

  render() {
    return (
      <div className="panel">
        <div>
          <TextField floatingLabelText="Name" errorText={this.state.errors.name} valueLink={this.linkState('name')} />
        </div>
        <div>
          <TextField floatingLabelText="Description" multiLine={true} valueLink={this.linkState('description')} />
        </div>
        <div>
          <TextField floatingLabelText="Rules" multiLine={true} valueLink={this.linkState('rules')} />
        </div>
        <div>
          <DatePicker floatingLabelText="Start Date" errorText={this.state.errors.startDate} valueLink={this.linkState('start_date')} />
        </div>
        <div>
          <SelectField floatingLabelText="Phase" menuItems={menuItems} valueLink={this.linkState('phase')} />
        </div>
        <div>
          <SelectField floatingLabelText="Visibility" menuItems={visibleOptions} valueLink={this.linkState('visible')} />
        </div>
      </div>
    );
  }

  getData() {
    const data = {...this.state};

    const errors = {};

    if (!data.name) {
      errors.name = 'Required';
    }
    if (!data.start_date) {
      errors.startDate = 'Required';
    }

    this.setState({ errors });

    if (Object.keys(errors).length) {
      return;
    }

    data.start_date = moment(data.start_date).valueOf();

    return data;
  }
}
