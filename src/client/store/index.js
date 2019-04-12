/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const configureStore = ({ initialState, middleware = [] } = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const devtools =
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionsBlacklist: [],
      actionSanitizer: (action) => ({
        ...action,
        type: action.type.toString(),
      }),
    });

  const composeEnhancers = devtools || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...[sagaMiddleware, ...middleware]))
  );
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./rootReducer', () => store.replaceReducer(require('./rootReducer').default));
    }
  }
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
