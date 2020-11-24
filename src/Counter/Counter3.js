import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initCount,
    }
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
      count: this.props.initCount,
    });
  }
  render() {
    return (
      <div>
        <h1>count3</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.addCount}>+1</button>
        <button onClick={this.minusCount}>-1</button>
        <button onClick={this.resetCount}>reset</button>
      </div>
    );
  }
}

Counter3.defaultProps = {
  initCount: 30,
}
Counter3.propTypes = {
  initCount: PropTypes.number,
}

export default Counter3;