import React from 'react';

import OrderContext from './OrderContext';

const Header = ({ orders = [] }) => (
  <div>
    <span>
      <OrderContext.Consumer>
      {values => (
        `購物車(${values.orders.length})`
      )}
      </OrderContext.Consumer>
    </span>
    <hr />
  </div>
);

export default Header;