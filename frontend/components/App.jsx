import React, { Component } from 'react';
import ToAddressFields from './ToAddressFields';

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
          <ToAddressFields />
        );
        break;
      default:
        return (
          <div>
            <h1>Fallback</h1>
          </div>
        );
    }
  }
}

export default App;
