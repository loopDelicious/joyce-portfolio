import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/reset.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/landing.css';
import './css/variables.css';
import './css/index.css';
import './css/buttons.css';
import './css/navigation.css';
import './css/App.css';
import './css/portfolio.css';
import './css/login.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// TODO: login / registration with server.js
// TODO: components for project modules
// TODO: creating navigation
// TODO: in app.js, use pushstate() to update url, and then display components based on url

