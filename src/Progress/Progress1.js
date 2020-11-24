import React, { Component } from 'react';
import ProgressBar1 from './ProgressBar1';
import './style.css';

class Progress1 extends Component {
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
        <ProgressBar1 value={value} />
        <button onClick={this.add}>+</button>
      </div>
    );
  };
};

export default Progress1;