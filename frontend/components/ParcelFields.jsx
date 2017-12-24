import React, { Component } from 'react';
import InputField from './InputField';

class ParcelFields extends Component {
  constructor() {
    super();
  }

  render() {
    const change = this.props.handleFieldInput;

    return (
      <div>
        <h2>Parcel Details</h2>

        <InputField field="length"
                    jsClass="jsParcel"
                    handleFieldInput={change} />
        <InputField field="width"
                    jsClass="jsParcel"
                    handleFieldInput={change} />
        <InputField field="height"
                    jsClass="jsParcel"
                    handleFieldInput={change} />
        <InputField field="weight"
                    jsClass="jsParcel"
                    handleFieldInput={change} />

        <button onClick={this.props.prevStep}>Previous</button>
        <button onClick={this.props.nextStep}>Next</button>
      </div>
    );
  }
}

export default ParcelFields;
