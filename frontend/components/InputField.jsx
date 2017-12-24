import React, { Component } from 'react';

function InputFields(props) {
  return (
    <div>
      <label htmlFor="">{props.field}</label>
      <input type="text"
             name={props.field}
             className={props.jsClass}
             value={props.value}
             onChange={props.handleFieldInput}/>
    </div>
  );
}

export default InputFields;
