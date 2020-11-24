import React, { Component } from 'react';

class GetDerivedStateFromPropsWrap extends Component {
  // state = {
  //   text: '',
  //   propText: '',
  // };
  // 剛掛載的時候會執行，不管是props/state更新也都會執行
  // Static的意思是說不是跟著組建的實體，意思就是你在裡面用this的話會找不到東西
  // nextProp吃的是新的Prop，prevState吃的是本來的State
  // 因為State要更新都會跑setState
  // 從每次Props/state的變動去取得新的State
  // 不能作非同步的操作，且一定要做回傳，但性能比componentDidUpdate好，所以應用的情境很少，常常會被呼叫
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if(nextProps.text !== prevState.propsText){
  //     return {
  //       text: nextProps.text,
  //       propText: nextProps.text,
  //       // 這樣會報錯因為不知道nextProps.items有沒有length方法
  //     }
  //   }
  //   return null;
  // }

  // onChange = e => {
  //   this.setState({
  //     text: e.target.value,
  //   });
  // };

  // reset = () => {
  //   this.setState({
  //     text: this.state.propText,
  //   });
  // };

  // 然後上面這些可以用下面的去寫
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.text !== this.props.text){
      this.setState({
        text: this.props.text,
      });
    }
  }

  onChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  reset = () => {
    this.setState({
      text: this.props.text,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <input value={this.state.text} onChange={this.onChange} type="text"/>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default GetDerivedStateFromPropsWrap;