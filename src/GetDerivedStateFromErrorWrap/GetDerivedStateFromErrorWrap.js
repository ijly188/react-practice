import React, { Component } from 'react';
import MyComponent from './MyComponent';

class GetDerivedStateFromErrorWrap extends Component {
  state = {
    hasError: false,
  }
  // 要去處理ERROR顯示頁面的這作法基本上有一限制
  // 如果是component裡面設定的話沒有用
  // 一定要是他抓下層component裡面如果有error的話跳轉error頁面
  // 如果同層的畫報錯還是會乾脆的報給你看
  // 就是父層component可以規劃一些例外錯誤處理
  // 然後可以用getDerivedStateFromError去把它蓋掉
  // componentDidCatch可以把錯誤訊息傳到指定的api位置
  // 然後關於api沒接到的錯誤"""不會"""在這兩個方法裡面去做處理
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  conponentDidCatch(error, info) {
    // axios.post('./api/logger', {info});
  };

  componentDidMount() {
    // JSON.parse('JSON');
  }

  render() {
    const { hasError } = this.state;
    if(hasError) {
      return <h1>ERROR!</h1>
    }
    return (
      <div>
        123<br/>
        <MyComponent />
      </div>
    );
  }
}

export default GetDerivedStateFromErrorWrap;