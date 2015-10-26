import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { createHashHistory } from 'history';

import App from './containers/app';


const history = createHashHistory();

window.StartPoints = (data) => {
  ReactDOM.render(
    <App history={history} bootstrap={data} />,
    document.getElementById('main')
  );
};
