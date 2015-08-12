import 'babel-core/polyfill';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'whatwg-fetch';
import HashHistory from 'react-router/lib/HashHistory';

import App from './containers/app';


injectTapEventPlugin();

const history = new HashHistory();

React.render(
  <App history={history} />,
  document.getElementById('main')
);
