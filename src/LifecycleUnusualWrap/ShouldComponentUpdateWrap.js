import React, { Component } from 'react';

class ShouldComponentUpdateWrap extends Component {
  // 這個函式是可以控制組建更新的時機
  // 一定要回傳return true/false
  // 一般來說shouldComponentUpdate都是return true如果他return false的話
  // 後面的更新render等函式都不會執行
  // 用來控制組件更新的時機
  // 以這個component來說
  // 每毫秒的都會把值傳進來但是只有在整除就是是完整一秒的時候才需要更新
  // 這種狀況就有需要控制更新的時機了
  // 這裡有一件很重要的事情就是，如果使用PureComponent大概會有像下面的效果
  // shouldComponentUpdate(nextProps, nextState) {
  //   return Object.keys(nextProps).some(key =>
  //     this.propsp[key] !== nextProps[key]
  //   );
  // };
  // 就是內建Object.keys裡面的把所有this.props的東西都拿出來
  // 然後裡面有一些(some)東西的key不等於nextProp的key的話就要更新(return true)
  // 但是比較的部分只比較一層，所以不是第一層的更新都不會判斷到
  // 就是所謂的shallow compare
  shouldComponentUpdate(nextProps, nextState) {
    if( parseInt(nextProps.ms / 1000, 10) !== parseInt(this.props.ms / 1000, 10)){
      return true;
    }
    return false;
  };
  render() {
    const { ms } = this.props;
    return (
      <div>
        {parseInt(ms / 1000, 10)}
      </div>
    );
  }
}

export default ShouldComponentUpdateWrap;