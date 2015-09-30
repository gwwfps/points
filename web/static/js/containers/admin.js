import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';


@connect(state => ({
  tournaments: state.tournaments,
  user: state.user
}))
export default class Admin extends Component {
  render() {
    const actions = bindActionCreators(Actions, dispatch);
  }
}
