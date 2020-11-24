import React, { Component } from 'react';
import style from './SingleChatRoomWrap.module.css';

class SingleChatRoomWrap extends Component {
  state = {
    text: '',
    content: [],
  };
  enterMessage = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.submitMessage();
    }
  }
  submitMessage = (e) => {
    e.preventDefault();
    // 如果沒有擋的話會面會跳一下就轉導到別的頁面
    const { text, content } = this.state;
    this.setState({
      text: '',
      content: [{ id: Date.now(), text}, ...content],
    });
  };
  render() {
    const { text, content } = this.state;
    return (
      <div>
        <div>
          <span>方法一</span>
          <input
          type="text"
          value={text}
          onKeyPress={this.handleKeyPress}
          onChange={this.enterMessage}/>
          <button
            onClick={this.submitMessage}
          >Submit</button>
        </div>
        <div>
          <span>方法二</span>
          <form onSubmit={this.submitMessage}>
            <input
            type="text"
            value={text}
            onChange={this.enterMessage}/>
            <button
              type="submit"
              onClick={this.submitMessage}
            >Submit</button>
          </form>
        </div>

        <ul>
          {
            content.map((item, index) => (
              <li key={item.id}>{item.text}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default SingleChatRoomWrap;