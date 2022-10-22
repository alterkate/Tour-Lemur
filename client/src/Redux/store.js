import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from '../Sagas/rootSaga';

const saga = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga)),
);

saga.run(rootSaga);

export default store;
