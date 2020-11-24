import React, { Component, createRef } from 'react';

class Input extends Component {
  myInput3 = createRef();
  
  componentDidMount() {
    // react 官方推薦用法
    this.myInput3.current.focus();
  }
  render() {
    return (
      <div>
        <h2>input3</h2>
        <h3>Enter your name</h3>
        <input type="text" ref={this.myInput3} placeholder="input3"/>
      </div>
    )
  }
}

export default Input;