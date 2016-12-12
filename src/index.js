import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';
import './index.css';

// React-Material-UI Dependency
injectTapEventPlugin();

const Root = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
