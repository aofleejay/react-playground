import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/Routes'
import ErrorBoundary from './containers/ErrorBoundary'
import ThemeContext from './contexts/Theme'
import './index.css'

ReactDOM.render(
  <ErrorBoundary>
    <ThemeContext.Provider value="light">
      <Routes />
    </ThemeContext.Provider>
  </ErrorBoundary>,
  document.getElementById('root'),
)
