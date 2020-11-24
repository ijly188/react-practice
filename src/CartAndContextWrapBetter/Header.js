import React from 'react';

import { Consumer } from './context/OrderContext';

const Header = ({ orders = [] }) => (
  <div>
    <span>
      <Consumer>
      {values => (
        `購物車(${values.orders.length})`
      )}
      </Consumer>
    </span>
    <hr />
  </div>
);

export default Header;