import React, { Component } from 'react';
import Block from './Block';
import Bar from './Bar';
import Image from './Image';

class CreditCard extends Component {
  render() {
    const { open, toggle } = this.props;
    return (
      <Block>
        <Bar onClick={toggle}>Credit Cards</Bar>
        { open && <Image src={require('./assets/creditcard.png')}/>}
      </Block>
    );
  }
};

export default CreditCard;