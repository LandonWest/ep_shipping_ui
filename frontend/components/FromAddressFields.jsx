import React, { Component } from 'react';
import InputField from './InputField';

class FromAddressFields extends Component {
  constructor() {
    super();
  }

  render() {
    const change = this.props.handleFieldInput;

    return (
      <div>
        <h2>From Address</h2>

        <InputField field="company"
                    jsClass="jsFromAddress"
                    handleFieldInput={change} />
        <InputField field="name"
                    jsClass="jsFromAddress"
                    handleFieldInput={change} />
        <InputField field="street 1"
                    jsClass="jsFromAddress"
                    handleFieldInput={change} />
        <InputField field="street 2"
                    jsClass="jsFromAddress"
                    handleFieldInput={change} />
        <InputField field="city"
                    jsClass="jsFromAddress"
                    handleFieldInput={change} />
        <InputField field="state"
                    jsClass="jsFromAddress"
                    handleFieldInput={change} />
        <InputField field="zip"
                    jsClass="jsFromAddress"
                    handleFieldInput={change}/>
        <InputField field="phone"
                    jsClass="jsFromAddress"
                    handleFieldInput={change}/>
        <InputField field="email"
                    jsClass="jsFromAddress"
                    handleFieldInput={change}/>

        <button onClick={this.props.prevStep}>Previous</button>
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  }
};

export default FromAddressFields;
