import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { compose, createStore } from 'redux';
import { persistReducer,persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import { Layout } from './components';
import rootReducer from './reducers';
import { Routes } from './routes/Routes';
import { GlobalStyle } from './styles';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer, composeEnhancers(),
) as any;

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <GlobalStyle />
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </PersistGate>
  </Provider>
);

const rootElement = document.getElementById('root');
render(<App />, rootElement);
