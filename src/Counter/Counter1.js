import React, { Component } from 'react';

class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }

    this.addCount = this.addCount.bind(this);
    // 沒有上面這行的話沒辦法使用setState方法
  }
  addCount(){
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
        <h1>count1</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.addCount}>+1</button>
        <button onClick={this.minusCount}>-1</button>
        <button onClick={this.resetCount}>reset</button>
      </div>
    );
  }
}

export default Counter1;