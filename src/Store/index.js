import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { counterEpic } from './Epic/Counter';
import incrementCounter from './Reducers/incrementCount';

const rootEpic = combineEpics(
  counterEpic.decrement,
  counterEpic.increment,
);

export const rootReducer = combineReducers({
  incrementCounter,
})

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

const Store = createStoreWithMiddleware(
  rootReducer,
);

export default Store;