"use strict";

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from '../reducers';

async function configureStore(initialState = {}) {
  const enhancer = applyMiddleware(thunk, logger);
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}

export default configureStore;
