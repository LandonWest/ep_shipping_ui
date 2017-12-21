import React, { Component } from 'react';

function InputFields(props) {
  return (
    <div>
      <label htmlFor="">{props.field}</label>
      <input type="text"
             className={props.jsClass}/>
    </div>
  );
}

export default InputFields;
