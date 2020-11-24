import React, { Component, createRef } from 'react';

class Input extends Component {
  componentDidMount() {
    this.myInput2.focus();
  }
  setRef = (input) => {
    this.myInput2 = input;
    // 上面這個寫法要加上面的componentDidMount的方法裡面設定focus()
    // 也可以直接用下面的方法，但是也不是官方建議的用法
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