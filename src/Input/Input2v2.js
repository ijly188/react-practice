import React, { Component, createRef } from 'react';

class Input extends Component {
  setRef = (input) => {
    input.focus();
  }
  render() {
    return (
      <div>
        <h2>input2</h2>
        <h3>Enter your name</h3>
        <input type="text" ref={this.setRef} placeholder="input2"/><br/>
      </div>
    )
  }
}

export default Input;