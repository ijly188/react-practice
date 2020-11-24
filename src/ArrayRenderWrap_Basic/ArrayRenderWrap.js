import React, { Component } from 'react';

import Item from './Item';

class ArrayRenderWrap extends Component {
  render() {
    return (
      <div>
        <Item>Learn JavaScript</Item>
        <Item>Learn React</Item>
        <Item>Make Money</Item>
        <Item>Buy a House</Item>
      </div>
    );
  };
}

export default ArrayRenderWrap;