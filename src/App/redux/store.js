import { createStore, applyMiddleware } from 'redux';
import creatSagaMiddleware from 'redux-saga';

import { reducers } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = creatSagaMiddleware()
let store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export { store };