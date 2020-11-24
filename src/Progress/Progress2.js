import React, { Component } from 'react';
import ProgressBar2 from './ProgressBar2';
import './style.css';

class Progress2 extends Component {
  state = {
    value: 0,
  };
  add = () => {
    this.setState({
      // value: this.state.value + 1,
      value: 0,
    });
  };
  render(){
    const { value } = this.state;
    return (
      <div>
        <ProgressBar2 value={value} />
        <button onClick={this.add}>+</button>
      </div>
    );
  };
};

export default Progress2;