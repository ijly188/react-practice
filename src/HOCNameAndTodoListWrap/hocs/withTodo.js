import React, { Component } from 'react';

import names from '../names.json';

export default WrappedComponent => class extends Component {
  state = {
    items: [],
    text: '',
  }
  onChangeText = e => {
    this.setState({
      text: e.target.value,
    })
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState(({ text, items }) => ({
      text: '',
      items: [...items, text],
    }));
  };
  render() {
    const { text, items } = this.state;

    return (
      <WrappedComponent
        {...this.props}
        text={text}
        onChangeText={this.onChangeText}
        onSubmit={this.onSubmit}
        items={items}
      />
    )
  };
};