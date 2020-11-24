import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter2 extends Component {
  static propTypes = {
    initCount: PropTypes.number,
  }
  static defaultProps = {
    initCount: 20,
  }
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
        <h1>count2</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.addCount}>+1</button>
        <button onClick={this.minusCount}>-1</button>
        <button onClick={this.resetCount}>reset</button>
      </div>
    );
  }
}

export default Counter2;