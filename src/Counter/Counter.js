import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }
  minusCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  }
  resetCount = () => {
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div>
        <h1>count0</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.addCount}>+1</button>
        <button onClick={this.minusCount}>-1</button>
        <button onClick={this.resetCount}>reset</button>
      </div>
    );
  }
}

export default Counter;