import React, { Component } from 'react';
import ProgressBar3 from './ProgressBar3';
import './style.css';

class Progress3 extends Component {
  state = {
    value: 0,
  };
  add = () => {
    this.setState({
      // value: this.state.value + 1,
      value: 0,
    });
  };
  render(){
    const { value } = this.state;
    return (
      <div>
        <ProgressBar3 value={value} />
        <button onClick={this.add}>+</button>
        {/* 
          當state.value設定為0的時候，再去點擊+的按鈕
          在不是pure component的狀態下，全部都會再做一次render
          可是實際上並不需要去做觸發更新頁面的動作
          這個狀況下就會造成效能的耗損

          因為有多做一個shallow compare
          基本上是針對state的第一層去做比較
          所以假設我們操作的
          state = {
            value: 0,
            info: {
              x: 1,
            },
          }
          add = () => {
            const { info } = this.state;
            info.x += 1;
            this.setState({
              info: info,
            });
          };
          這個狀況下畫面並不會做重新render
        */}
      </div>
    );
  };
};

export default Progress3;