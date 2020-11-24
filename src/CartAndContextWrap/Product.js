import React from 'react';

import OrderContext from './OrderContext';

const Product = ({ id, name }) => (
  <li>
    <label>{name}</label>
    <OrderContext.Consumer>
      {value => (
        <button onClick={() => value.addOrder(id)}>
          +
        </button>
      )}
    </OrderContext.Consumer>
  </li>
);

export default Product;