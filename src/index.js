import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ErrorBoundary from './ErrorBoundary'

ReactDOM.render(
  <ErrorBoundary>
    <App modThree={2} />
  </ErrorBoundary>
, document.getElementById('root'))
