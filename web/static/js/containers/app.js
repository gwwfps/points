import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ThemeManager from 'material-ui/lib/styles/theme-manager';

import * as reducers from '../reducers';
import Theme from '../utils/theme';
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
        <AppRouter history={this.props.history} />
      </Provider>
    );
  }

  static childContextTypes = { muiTheme: React.PropTypes.object };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme)
    };
  }
}
