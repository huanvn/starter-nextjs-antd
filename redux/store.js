import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import combineReducer from './reducer'
import rootSaga from './saga'

const config = require('../config')
const sagaMiddleware = createSagaMiddleware()

export const initStore = (initialState = {}) => {
  const middleWares = [sagaMiddleware]
  const enhancers = [applyMiddleware(...middleWares)]
  let store = null
  if (config.isDevEnv() && !config.isServer()) {
    store = createStore(combineReducer(), initialState, composeWithDevTools(...enhancers))
  } else {
    store = createStore(combineReducer(), initialState, ...enhancers)
  }

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()
  return store
}
