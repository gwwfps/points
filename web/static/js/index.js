import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/app';
import history from './history';


injectTapEventPlugin();

window.StartPoints = (data) => {
  ReactDOM.render(
    <App history={history} bootstrap={data} />,
    document.getElementById('main')
  );
};
