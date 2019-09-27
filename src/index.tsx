import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './containers';
import { ConnectedRouter } from 'connected-react-router';
import { InitialState } from './models/initial-state';
import { Provider } from 'react-redux';
import { configureStore, history } from './redux/store';
import './styles/reset.scss';
import './styles/styles.scss';

const store = configureStore(InitialState);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
