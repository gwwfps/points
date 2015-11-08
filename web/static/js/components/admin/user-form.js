import React, { Component } from 'react';
import { TextField, SelectField } from 'material-ui';
import LinkStateMixin from 'react-addons-linked-state-mixin';
import ReactMixin from 'react-mixin';

import MaterialIcon from '../material-icon';


const adminOptions = [
  { payload: true, text: 'Admin' },
  { payload: false, text: 'Regular User' }
];

@ReactMixin.decorate(LinkStateMixin)
export default class UserForm extends Component {
  state = { errors: {} };

  componentWillMount() {
    this.updateStateUser(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateStateUser(nextProps);
  }

  updateStateUser(props) {
    if (props.user) {
      this.setState({...props.user});
    }
  }

  render() {
    return (
      <div className="panel">
        <div>
          <TextField floatingLabelText="Name" errorText={this.state.errors.name} valueLink={this.linkState('name')} />
        </div>
        <div>
          <TextField floatingLabelText="Email" errorText={this.state.errors.email} valueLink={this.linkState('email')} />
        </div>
        <div>
          <TextField floatingLabelText="Battletag or Battle.net Email" errorText={this.state.errors.bnet} valueLink={this.linkState('bnet')} />
        </div>
        <div>
          <TextField floatingLabelText="Public Note" multiLine={true} valueLink={this.linkState('note')} />
        </div>
        <div>
          <SelectField floatingLabelText="User Role" menuItems={adminOptions} valueLink={this.linkState('admin')} />
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
    if (!data.email) {
      errors.email = 'Required';
    }

    this.setState({ errors });

    if (Object.keys(errors).length) {
      return;
    }

    return data;
  }
}
