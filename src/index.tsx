import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Typography, ThemeProvider } from '@material-ui/core';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './App';
import store from './redux/store';

import theme from './theme';

const persistor = persistStore(store);
ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate
          loading={<Typography>Loading...</Typography>}
          persistor={persistor}
        >
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById('app'),
);
