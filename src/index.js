/* eslint-disable import/default */
import React from 'react';
import ReactDOM from 'react-dom';

import store, { history } from './redux/store';
import App from './App';

import * as serviceWorker from './config/serviceWorker';

import './plugins/i18n';

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
);

serviceWorker.unregister();
