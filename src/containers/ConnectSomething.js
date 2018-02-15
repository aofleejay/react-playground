import React, { Component } from 'react'
import { connect } from 'react-redux'
import Something from '../components/Something'

class ConnectSomething extends Component {
  render() {
    return <Something closeModal={this.props.closeModal} user={this.props.user} isLoading={this.props.isLoading} />
  }
}

export default connect(state => ({ isLoading: state.isLoading }))(ConnectSomething)
