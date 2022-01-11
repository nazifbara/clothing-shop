import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import 'normalize.css/normalize.css';
import '@aws-amplify/ui-react/styles.css';
import { App } from './containers';
import Amplify from 'aws-amplify';
import reportWebVitals from './reportWebVitals';
import config from './aws-exports';
import dotenv from 'dotenv';
import { ThemeProvider } from 'styled-components';
import { defaultRebootTheme } from 'styled-reboot';
import createSagaMiddleware from '@redux-saga/core';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import rootSaga from './sagas';
import rootReducer from './slices';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: true,
});

dotenv.config();
Amplify.configure(config);
sagaMiddleware.run(rootSaga);

const Root = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={{ ...defaultRebootTheme, app: theme }}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ReduxProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
