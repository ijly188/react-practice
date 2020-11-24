import React, { Component } from 'react';

class FormText extends Component {
  state = {
    text: 'abc',
  };
  onChangeText = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div>
        <input
          type="text"
          value={text}
          onChange={this.onChangeText}
        />
        <textarea
          type="text"
          value={text}
          onChange={this.onChangeText}
        />
        <h2>{text}</h2>
      </div>
    );
  }
}

export default FormText;
/*
  在react組件裡面控制表單元素
  1.  這必須是一個有state的component
  當input綁上value的時候就會變成一個唯讀的值
  要做修改的話一定要綁上一個onChange事件
  然後再把input的event.target.value的值綁到setState上面去觸發state修改
  然後就可以在修改的同時觸發h2裡面的值更新並且重新render
*/