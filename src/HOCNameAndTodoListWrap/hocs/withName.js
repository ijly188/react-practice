import React, { Component } from 'react';

import names from '../names.json';

export default WrappedComponent => class extends Component {
  state = {
    items: names,
    text: '',
  };
  onChangeText = e => {
    this.setState({
      text: e.target.value,
    })
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState(({ text }) => ({
      items: !text ? names : names.filter(name => name.includes(text)),
    }));
  };
  render() {
    const { text, items } = this.state;

    return (
      <WrappedComponent
        {...this.props}
        // 放前面跟放後面的差別是：
        // 如果上層HOCNameAndTodoListWrap這層在引用的時候
        // 有給text的時候會被這裡寫的text={text}蓋過去
        // 如果{...this.props}寫在後面的話，就是下面有標注的位置
        // 會被上層指定的text給蓋過去
        // 所以一般為了保線都會在最前面習慣性的加一個{this.props}
        text = { text }
        onChangeText = { this.onChangeText }
        onSubmit={this.onSubmit}
        items = { items }
        // 這裡就是所謂的放後面
      />
    )
  };
};