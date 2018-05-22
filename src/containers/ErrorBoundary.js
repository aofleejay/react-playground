import React, { Component } from 'react'
import { Layout } from '../components/common'

class ErrorBoundary extends Component {
  state = { error: null, info: null }

  componentDidCatch(error, info) {
    this.setState({ error, info })
  }

  render() {
    if (this.state.error) {
      return (
        <Layout>
          <p>Whoops. Somthing went wrong.</p>
        </Layout>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
