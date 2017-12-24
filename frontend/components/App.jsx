import React, { Component } from 'react';
import ToAddressFields from './ToAddressFields';

class App extends Component {
  constructor() {
    super();
    this.nextStep = this.nextStep.bind(this);

    this.state = {
      step: 1,
    }
  }

  nextStep() {
    let current = this.state.step;
    console.log(`moving to step ${current + 1}`);
    this.setState({step: ++current});
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <ToAddressFields nextStep={this.nextStep} />
        );
        break;
      case 2:
        return (
          "Hello from step two."
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
