import React, { Component, createRef } from 'react';
import Child1 from './Child1';

class Parent1 extends Component {
  childRef = createRef();
  state = {
    count: 0,
  }
  addCount = () => {
    this.setState({ 
      count: this.state.count + 1
    });
  };
  addChildCount = () => {
    this.childRef.current.addCountInChild();
    // 這裡最後要用的是child component裡面定義的方法
  };
  render() {
    return (
      <div>
        <h1>Parent: {this.state.count}</h1>
        <button onClick={this.addCount}>+Parent</button>
        <button onClick={this.addChildCount}>+Child</button>
        <Child1 ref={this.childRef} addParentCount={this.addCount} />
      </div>
    )
  }
}

export default Parent1;