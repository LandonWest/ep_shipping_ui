import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
    }
  }


  render() {
    switch (this.state.step) {
      case 1:
        return (
          <div><h1>First Step</h1></div>
        );
        break;
      default:
        return (
          <div><h1>Fallback</h1></div>
        );
    }
  }
}

export default App;
