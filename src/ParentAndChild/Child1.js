import React, { Component } from 'react';

class Child1 extends Component {
  state = {
    count: 0,
  };
  addCountInChild = () => {
    this.setState({ 
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Child: {this.state.count}</h2>
        <button onClick={this.addCountInChild}>+Child</button>
        <button onClick={this.props.addParentCount}>+Parent</button>
        {/*
          要加parent component裡面的value要做的事情是透過props把方法傳下來
          可以work的原因是因為你的方法跟component同層會吃到的state就是同層的state
        */}
      </div>
    )
  }
}

export default Child1;