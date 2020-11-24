import React, { PureComponent } from 'react';

class Item extends PureComponent {
  render() {
    console.log('render', this.props.text);
    return <li>{this.props.text}</li>
  }
};

export default Item;