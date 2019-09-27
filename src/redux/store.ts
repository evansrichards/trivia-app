import { Store, createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { reducers } from './reducers';
import { AppState } from '../models/app-state';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export function configureStore(InitialState: AppState): Store<AppState> {

  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers(history as any) as any, // root reducer with router state
    InitialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        routerMiddleware(history as any),
      ),
    ),
  ) as Store<AppState>; 

  return store;
}
