import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import ThemeManager from '../utils/theme-manager';
import AppRouter from './router';
import { BOOTSTRAP } from '../constants/action-types';


const reducer = combineReducers(reducers);
const store = applyMiddleware(thunk)(createStore)(reducer);


export default class App extends Component {
  componentDidMount() {
    store.dispatch({ type: BOOTSTRAP, payload: this.props.bootstrap })
  }

  render() {
    return (
      <Provider store={store}>
        {() => <AppRouter history={this.props.history} />}
      </Provider>
    );
  }

  static childContextTypes = { muiTheme: React.PropTypes.object };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
}
