import { configureStore } from '@reduxjs/toolkit';
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { appReducer } from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

let middleware;

if (true === true)
  middleware = [sagaMiddleware, logger];
else
  middleware = [sagaMiddleware];

const Store = configureStore({
  reducer: appReducer,
  devTools: true,
  middleware: middleware
});

export default Store

sagaMiddleware.run(rootSaga);