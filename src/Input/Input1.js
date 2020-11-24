import React, { Component, createRef } from 'react';

class Input extends Component {
  componentDidMount() {
    this.refs.myInput1.focus();
  }
  render() {
    return (
      <div>
        <h2>input1</h2>
        <h3>Enter your name</h3>
        <input type="text" ref='myInput1' placeholder="input1" /><br/>
      </div>
    )
  }
}

export default Input;