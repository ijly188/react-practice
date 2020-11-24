import React, { Component } from 'react';
import Block from './Block';
import Bar from './Bar';
import Image from './Image';

class Promotion extends Component {
  state = {
    open: true,
  };
  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { open } = this.state;
    return (
      <Block>
        <Bar onClick={this.toggle}>Promotion</Bar>
        { open && <Image src={require('./assets/promotion.png')}/>}
      </Block>
    );
  }
};

export default Promotion;