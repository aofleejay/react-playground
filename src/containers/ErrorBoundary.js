import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = { error: null, info: null }

  componentDidCatch(error, info) {
    this.setState({ error, info })
  }

  render() {
    if (this.state.error) return <p>Whoops. Somthing went wrong.</p>

    return this.props.children
  }
}

export default ErrorBoundary
