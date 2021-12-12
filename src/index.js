import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import 'normalize.css/normalize.css';
import App from './components/app';
import Amplify from 'aws-amplify';
import reportWebVitals from './reportWebVitals';
import config from './aws-exports';
import dotenv from 'dotenv';
import { ThemeProvider } from 'styled-components';
import { defaultRebootTheme } from 'styled-reboot';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

dotenv.config();
Amplify.configure(config);

const Root = () => {
  return (
    <ThemeProvider theme={{ ...defaultRebootTheme, app: theme }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
