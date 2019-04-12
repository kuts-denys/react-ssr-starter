import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router';
import ErrorBoundary from 'components/common/ErrorBoundary';
import { configureStore } from './store';
import App from './App';
import IntlProvider from './i18n/IntlProvider';
import createHistory from './store/history';

const browserHistory = createHistory();

const store =
  window.store ||
  configureStore({
    initialState: window.__PRELOADED_STATE__,
    middleware: [routerMiddleware(browserHistory)],
  });

// removes strange error "Expected server HTML to contain a matching <div> in <div>"
const renderMethod = module.hot && process.env.NODE_ENV === 'development' ? render : hydrate;

renderMethod(
  <Provider store={store}>
    <Router history={browserHistory}>
      <IntlProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </IntlProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }

  if (!window.store) {
    window.store = store;
  }
}
