import React, { Component } from 'react';
import Block from './Block';
import Bar from './Bar';
import Image from './Image';

class Promotion extends Component {
  render() {
    const { open, toggle } = this.props;
    return (
      <Block>
        <Bar onClick={toggle}>Promotion</Bar>
        { open && <Image src={require('./assets/promotion.png')}/>}
      </Block>
    );
  }
};

export default Promotion;