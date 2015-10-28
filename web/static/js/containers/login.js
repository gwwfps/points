import React, { Component } from 'react';
import { Paper, RaisedButton } from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthActions from '../actions/auth';
import SigninButton from '../components/signin-button';


@connect(state => ({}))
export default class Login extends Component {
  render() {
    const actions = bindActionCreators(AuthActions, this.props.dispatch);

    return (
      <div className='login'>
        <div className='six columns'>
          <Paper zDepth={1} className='panel'>
            <p>You need to be logged-in first.</p>
            <SigninButton verify={actions.verifyLogin} />
          </Paper>
        </div>
      </div>
    );
  }
}
