import React, { Component } from 'react';

class Child1 extends Component {
  render() {
    const { count, addParentCount, addChildCount } = this.props;
    return (
      <div>
        <h2>Child: {count}</h2>
        <button onClick={addChildCount}>+Child</button>
        <button onClick={addParentCount}>+Parent</button>
        {/*
          也可以用這種方式讓component裡面變得更加乾淨，類似vue slot的做法
        */}
      </div>
    )
  }
}

export default Child1;