import React, { Component } from 'react';

import Item from './Item';
// 把下面的資料先整理成一個array

const steps = [
  'Learn JavaScript',
  'Learn React',
  'Make Money',
  'Buy A House',
];

// class ArrayRenderWrap extends Component {
//   render() {
//     return (
//       <div>
//         <Item>Learn JavaScript</Item>
//         <Item>Learn React</Item>
//         <Item>Make Money</Item>
//         <Item>Buy a House</Item>
//       </div>
//     );
//   };
// }

class ArrayRenderWrap extends Component {
  render() {
    return (
      <div>
        {steps.map((item, index, array) => (
          <Item key={index}>
            {item}({index})
            {/* {array} */}
          </Item>
        ))}
      </div>
    );
  };
}

export default ArrayRenderWrap;