import React, { Component } from 'react';

import { Provider } from './context/OrderContext';

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
        <Provider value={contextValue}>
          <Header />
          <ProductList />
        </Provider>
      </div>
    );
  }
}

export default CartAndContextWrap;