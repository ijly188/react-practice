import React, { Component } from 'react';

class ProgressBar1 extends Component {
  render() {
    const { value } = this.props;
    console.count('render');
    return (
      <div className="bar-outer">
        <div
          className="bar-inner"
          style={{ width: `${value}%`}}
        />
        <span>{value}%</span>
      </div>
    );
  }
};

export default ProgressBar1;