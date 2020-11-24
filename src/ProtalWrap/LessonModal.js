import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class LessonModal extends Component {
  // return 後面可以加上fragment
  // 這裡會找第一個找到的id去做修改
  // 而且資料是用append的方式進去的不是innerHtml的方式
  render() {
    return createPortal(
      <div>
        LessonModal
      </div>,
      document.getElementById('modal')
      // 一定要有createPortal才等把元素指定到指定的div裡面
    );
  }
}

export default LessonModal;