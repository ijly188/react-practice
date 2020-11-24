import React, { Component } from 'react';
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
    return (
      <div>
        <Header orders={orders} />
        <ProductList addOrder={this.addOrder} />
      </div>
    );
  }
}

export default CartAndContextWrap;