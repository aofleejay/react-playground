import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import ErrorBoundary from './containers/ErrorBoundary';
import './index.css';

ReactDOM.render(
  <ErrorBoundary>
    <Routes />
  </ErrorBoundary>
  , document.getElementById('root'),
);
