import React, { Component } from 'react'

class Foo extends Component {
  state = { from: 'Initial Foo' }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { from: `${nextProps.from} [This sentence added from getDerivedStateFromProps.]` }
  }

  render() {
    return (
      <h1>{this.state.from}</h1>
    )
  }
}

export default Foo
