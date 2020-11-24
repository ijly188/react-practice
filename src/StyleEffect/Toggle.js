import React, { Component } from 'react';
import eunha from './eunha.jpg';
import './style.css';

class Toggle extends Component {
  state = {
    visible: true,
  };
  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    const { visible } = this.state;
    const styleObj = { display: visible ? 'block' : 'none' };
    // const isPicShow = visible ? 'image' : 'image hide';
    const isPicShow = `image ${visible ? '' : 'hide'}`;
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <hr />
        {/* {visible ? <img src={eunha} alt="" srcSet=""/> : null} */}
        {/* {visible && <img src={eunha} alt="" srcSet=""/>} */}
        {/*
          這裡是直接不render，不是給他display:none的那種做法
          上面兩種做法都可以達到判斷要不要秀的特效
        */}
        {/* <img style={styleObj} src={eunha} alt="" srcSet=""/> */}
        {/* <img style={{ display: visible ? 'block' : 'none' }} src={eunha} alt="" srcSet=""/> */}
        <img className={isPicShow} src={eunha} alt="" srcSet=""/>
        {/* 
          這裡的做法是用style的方式去處理秀跟不秀就是用display: none的方式去處理
          下面的做法也可以但是一定要兩個{{}}去包，因為外層的{}是給style object去解的
          裡面的{ display: visible ? 'block' : 'none' }是裡面的資料
        */}
      </div>
    )
  };
}

export default Toggle;