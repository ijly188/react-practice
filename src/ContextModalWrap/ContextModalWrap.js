import React, { Component } from 'react';

import Header from './Header';
import Modal from './Modal';
import './App.css';
import {Provider} from './context';

class ContextModalWrap extends Component {
  state = {
    modal: null,
    login: false,
  };
  render() {
    const contextValue = {
      state: this.state,
      setState: this.setState.bind(this),
      // 可以把setState傳出去但是需要綁定組件本身
    }
    return (
      <Provider value={contextValue}>
        <div className="app">
          <Header />
          <Modal />
        </div>
      </Provider>
    )
  }
}

export default ContextModalWrap;