import React, { Component } from 'react';

class Counter4 extends Component {
  state = {
    count: 0,
  }
  addCount1 = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 1,
    });
  }
  addCount2 = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      } 
    });
    // 上下寫法不同但是意思相同，這段是把上面的寫法用es6的方式去省略的寫
    this.setState(state => ({
      count: state.count + 1,
    }));
    this.setState((state) => {
      return {
        count: state.count + 1,
      } 
    });
  }
  addCount3 = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
    this.sendCount();
  }
  addCount4 = () => {
    this.setState({
      count: this.state.count + 1,
    },() => {
      this.sendCount();
    });
  }
  sendCount = () => {
    fetch(`/api/count?value=${this.state.count}`);
  }
  render() {
    return (
      <div>
        <h1>count4</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.addCount1}>+1v1</button>
        <button onClick={this.addCount2}>+1v2</button>
        <button onClick={this.addCount3}>+1v3</button>
        {/* 
          如果在addCount裡面把setState複製三次
          點擊以後一次還是只加一次，因為setState是一個非同步方法
          addCount2就可以避免這樣的問題因為是針對現在的state去做處理
        */}
        {/*
          用addCount3的做法去做的話我們這邊會看到打api出去的count會一直拿到舊的state
        */}
      </div>
    );
  }
}

export default Counter4;