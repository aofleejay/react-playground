import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    errorMessage: null
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch')
    console.log('error: ', error)
    console.log('info: ', info)
    this.setState({ errorMessage: error.message })
  }
  
  render() {
    if (this.state.errorMessage) return <p>{this.state.errorMessage}</p>

    return (
      this.props.children
    )
  }
}

export default ErrorBoundary
