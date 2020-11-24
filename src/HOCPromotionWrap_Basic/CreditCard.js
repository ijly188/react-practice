import React, { Component } from 'react';
import Block from './Block';
import Bar from './Bar';
import Image from './Image';

class CreditCard extends Component {
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
        <Bar onClick={this.toggle}>Credit Cards</Bar>
        { open && <Image src={require('./assets/creditcard.png')}/>}
      </Block>
    );
  }
};

export default CreditCard;