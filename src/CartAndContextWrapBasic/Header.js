import React from 'react';

const Header = ({ orders = [] }) => (
  <div>
    <span>{`購物車(${orders.length})`}</span>
    <hr />
  </div>
);

export default Header;