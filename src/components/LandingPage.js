import React, { Component } from 'react'
import ConnectSomething from '../containers/ConnectSomething'

class LandingPage extends Component {
  render() {
    return <ConnectSomething closeModal={true} user={{ name: 'Aof' }} />
  }
}

export default LandingPage
