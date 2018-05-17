import React, { Component } from 'react'
import Foo from './Foo'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      from: 'Initial state from App.',
    }
    console.log('constructor')
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps')
  //   console.log('nextProps: ', nextProps)
  //   console.log('prevState: ', prevState)
  //   return null
  // }
  
  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
    console.log('nextProps: ', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log('nextProps: ', nextProps)
    console.log('nextState: ', nextState)
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
    console.log('nextProps: ', nextProps)
    console.log('nextState: ', nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    console.log('prevProps: ', prevProps)
    console.log('prevState: ', prevState)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <Foo from={this.state.from.o.o} />
        <button onClick={() => this.setState({ from: 'New prop received.' })}>
          Pass new prop
        </button>
      </div>
    )
  }
}

export default App
