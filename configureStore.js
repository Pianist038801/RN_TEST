import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './src/reducers'
import sagas from './src/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()



export default function configureStore() {
  let store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(sagas);
  return store;
}

