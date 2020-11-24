import React, { PureComponent } from 'react';

class ProgressBar3 extends PureComponent {
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

export default ProgressBar3;