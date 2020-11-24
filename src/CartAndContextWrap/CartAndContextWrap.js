import React, { Component } from 'react';

import OrderContext from './OrderContext';

import Header from './Header';
import ProductList from './ProductList';

class CartAndContextWrap extends Component {
  state = {
    orders: [],
  };
  addOrder = order => {
    this.setState({ 
      orders: [...this.state.orders, order],
    });
  };
  render() {
    const { orders } = this.state;
    const contextValue = {
      orders,
      addOrder: this.addOrder,
    };

    return (
      <div>
        {/* 
          <OrderContext>直接這樣用會是錯的因為他不是一個元件
        */}
        <OrderContext.Provider value={contextValue}>
          <Header />
          <ProductList />
        </OrderContext.Provider>
      </div>
    );
  }
}

export default CartAndContextWrap;