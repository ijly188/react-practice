import React, { Component, createRef } from 'react';

class GetSnapshotBeforeUpdateWrap extends Component {
  // 執行時機是更新render函式之後
  // 執行getSnapshotBeforeUpdate
  // 然後更新React更新DOM和refs
  // 然後執行componentDidUpdate順序上來講大概是這樣
  // 就是頁面上的東西實際在做更新之前或做getSnapshotBeforeUpdate
  // 變更之後會跑ComponentDidupdat
  // 可以用來記錄頁面update之前的dom的狀態，舉例像是scrollTop/scrollHeight

  ref = createRef();
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if(prevProps.items.length !== this.props.items.length) {
      const list = this.ref.current;
      const snapshot = list.scrollHeight - list.scrollTop;
      // 捲軸距離底部的位置
      return snapshot;
    }
    return null;
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 就是當捲軸有一棟以後要做的事情
    // 重要概念就是這邊的snapshot的型別沒有做設定
    if(snapshot) {
      const list = this.ref.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  };

  render() {
    const { items } = this.props;
    return (
      <div ref={this.ref}>
        {/* {item.map} */}
      </div>
    );
  }
}

export default GetSnapshotBeforeUpdateWrap;