import React, { Component } from 'react';
import InputField from './InputField';

class ToAddressFields extends Component {
  constructor() {
    super();

  }

  render() {
    const change = this.props.handleFieldInput;
    const to = this.props.toAddress;

    return (
      <div>
        <h2>To Address</h2>

        <InputField field="company"
                    jsClass="jsToAddress"
                    value={to.company}
                    handleFieldInput={change} />
        <InputField field="name"
                    jsClass="jsToAddress"
                    value={to.name}
                    handleFieldInput={change} />
        <InputField field="street1"
                    jsClass="jsToAddress"
                    value={to.street1}
                    handleFieldInput={change} />
        <InputField field="street2"
                    jsClass="jsToAddress"
                    value={to.street2}
                    handleFieldInput={change} />
        <InputField field="city"
                    jsClass="jsToAddress"
                    value={to.city}
                    handleFieldInput={change} />
        <InputField field="state"
                    jsClass="jsToAddress"
                    value={to.state}
                    handleFieldInput={change} />
        <InputField field="zip"
                    jsClass="jsToAddress"
                    value={to.zip}
                    handleFieldInput={change}/>
        <InputField field="phone"
                    jsClass="jsToAddress"
                    value={to.phone}
                    handleFieldInput={change}/>
        <InputField field="email"
                    jsClass="jsToAddress"
                    value={to.email}
                    handleFieldInput={change}/>

        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  }
};

export default ToAddressFields;
