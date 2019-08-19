import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { setConfig } from 'react-hot-loader';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import { environment } from 'settings';
import { browserHistory } from 'utils';
import { configureStore } from 'store';

import App from 'app';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

const routingStore = new RouterStore();

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
  <Provider {...configureStore(routingStore)}>
    <App history={history} />
  </Provider>,
  document.getElementById('app-root')
);

if (environment.production) {
  const isHttps = location.protocol.includes('https');

  if ('serviceWorker' in navigator && isHttps) {
    navigator.serviceWorker.register('/sw.js');
  }
}

if (environment.development && module.hot) {
  module.hot.accept();
}
