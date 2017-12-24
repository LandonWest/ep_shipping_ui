import React, { Component } from 'react';
import ToAddressFields from './ToAddressFields';
import FromAddressFields from './FromAddressFields';

class App extends Component {
  constructor() {
    super();
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);

    this.state = {
      step: 1,
    }
  }

  nextStep() {
    let current = this.state.step;
    console.log(`moving to step ${current + 1}`);
    this.setState({step: ++current});
  }

  prevStep() {
    let current = this.state.step;
    console.log(`moving to step ${current - 1}`);
    this.setState({step: --current});
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
          <FromAddressFields prevStep={this.prevStep}
                             nextStep={this.nextStep} />
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
