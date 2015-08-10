import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/app';


injectTapEventPlugin();

React.render(
  <App />,
  document.getElementById('main')
);
