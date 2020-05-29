import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer'

// import { socketAction } from './socket/socket'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore() {
  // create store
  const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  )
  return store
}
