import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';
// import { socketAction } from './socket/actions';

export default function configureStore() {
  // create store
  const store = createStore(appReducer, applyMiddleware(thunkMiddleware));
  return store;
}