import React, { Component } from 'react';
import ToAddressFields from './ToAddressFields';
import FromAddressFields from './FromAddressFields';
import ParcelFields from './ParcelFields';

class App extends Component {
  constructor() {
    super();
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleFieldInput = this.handleFieldInput.bind(this);

    this.state = {
      step: 1,
      toAddress: {
        company: "",
        name: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
      },
      fromAddress: {
        company: "",
        name: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
      },
      parcel: {
        length: "",
        width: "",
        height: "",
        weight: ""
      }
    }
  }

  handleFieldInput(e) {
    const name = e.target.name;
    const parent = e.target.className;

    const map = {
      jsToAddress: () => {
        const toAddress = {...this.state.toAddress};
        toAddress[name] = e.target.value;
        this.setState({toAddress});
      },
      jsFromAddress: () => {
        const fromAddress = {...this.state.fromAddress};
        fromAddress[name] = e.target.value;
        this.setState({fromAddress});
      },
      jsParcel: () => {
        const parcel = {...this.state.parcel};
        parcel[name] = e.target.value;
        this.setState({parcel});
      },
    };

    map[parent]();
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
          <ToAddressFields nextStep={this.nextStep}
                           handleFieldInput={this.handleFieldInput}
                           toAddress={this.state.toAddress} />
        );
        break;
      case 2:
        return (
          <FromAddressFields prevStep={this.prevStep}
                             nextStep={this.nextStep}
                             handleFieldInput={this.handleFieldInput} />
        );
        break;
      case 3:
        return (
          <ParcelFields prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleFieldInput={this.handleFieldInput} />
        );
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
