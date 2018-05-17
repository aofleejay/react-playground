import React, { Component } from 'react';
import Foo from './Foo'

class App extends Component {
  state = {
    from: 'Initial state from App',
  }

  render() {
    return (
      <div className="App">
        <Foo from={this.state.from} />
        <button onClick={() => this.setState({ from: 'New prop received.' })}>Pass new prop</button>
      </div>
    );
  }
}

export default App;
