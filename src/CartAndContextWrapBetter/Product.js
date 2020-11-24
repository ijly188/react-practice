import React from 'react';

import { Consumer } from './context/OrderContext';

const Product = ({ id, name }) => (
  <li>
    <label>{name}</label>
    <Consumer>
      {value => (
        <button onClick={() => value.addOrder(id)}>
          +
        </button>
      )}
    </Consumer>
  </li>
);

export default Product;