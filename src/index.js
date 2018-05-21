import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import ErrorBoundary from './containers/ErrorBoundary'
import './index.css'

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
, document.getElementById('root'))
