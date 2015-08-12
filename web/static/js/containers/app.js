import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import ThemeManager from '../utils/theme-manager';
import PointsRouter from './points-router';


const reducer = combineReducers(reducers);
const store = applyMiddleware(thunk)(createStore)(reducer);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <PointsRouter history={this.props.history} />}
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
