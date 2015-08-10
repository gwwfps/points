import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import PointsApp from './points-app';
import * as reducers from '../reducers';
import ThemeManager from '../utils/theme-manager';


const reducer = combineReducers(reducers);
const store = createStore(reducer);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <PointsApp /> }
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
