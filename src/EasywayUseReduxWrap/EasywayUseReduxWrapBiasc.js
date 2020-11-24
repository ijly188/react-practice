// 不是使用react結構的寫法
import React, { Component } from 'react';

// 用類似觀察者模式的方式去實現redux結構
// let counter = 0;

// const subscriptions = [];

// const subscribe = (callback) => {
//   subscriptions.push(callback);
// };

// const doCallbacks = () => {
//   subscriptions.forEach(callback => {
//     callback();
//   });
// };

// const setCounter = (type) => {
//   if(type === 'INCREASEMENT') {
//     counter += 1;
//   } else if(type === 'DECREASEMENT') {
//     counter -= 1;
//   }
//   doCallbacks();
// }

// subscribe(() => {
//   console.log(counter);
// });
// subscribe(() => {
//   console.log('================================');
// });
// // 這裡可以subcribe多個console.log()內容

// setCounter('INCREASEMENT');
// setCounter('INCREASEMENT');
// setCounter('DECREASEMENT');
// // 這樣在console.log()裡面會看到
// /**
//  * 1
//  * ================================
//  * 2
//  * ================================
//  * 1
//  * ================================
//  */

/**
 * 上面是初始版本，下面會做一個把變數隱藏的版本
 */

// import { createStore } from 'redux';

const createStore = (dispatch, initState) => {
  // let state = initState;
  // let state = "";
  // if(initState){
  //   state = initState;
  // };
  let state = initState === null ? "" : initState;
  const subscriptions = [];
  const doCallbacks = () => {
    subscriptions.forEach(callback => {
      callback();
    });
  };

  return {
    getState: () => {
      return state;
    },
    subscribe:(callback) => {
      subscriptions.push(callback);
    },
    dispatch: (action) => {
      const result = dispatch(state, action);
      if(result !== state) {
        state = result;
        doCallbacks();
      }
    }
  };
};

const conter = (state, action) => {
// const conter = (state = 0, action) => {
  // if(action.type === 'INCREASEMENT') {
  //   return state += 1;
  // } else if(action.type === 'DECREASEMENT') {
  //   return state -= 1;
  // } else {
  //   return state;
  // }
  switch (action.type) {
    case 'INCREASEMENT':
      return state += 1 
    case 'DECREASEMENT':
      return state -= 1 
    default:
      return state
  }
};

const store = createStore(conter, 12);
// const store = createStore(conter);
// 可以這樣傳的原因是因為是傳一個payload進去

store.subscribe(() => {console.log(store.getState());});
store.subscribe(() => {console.log('================================');});
// 這裡可以subcribe多個console.log()內容

store.dispatch({type: 'INCREASEMENT'});
store.dispatch({type: 'INCREASEMENT'});
store.dispatch({type: 'DECREASEMENT'});
// ref link: https://www.youtube.com/watch?v=pdmfvkbtp60&list=PL2SrkGHjnWczkGGV0FIpl3ECY1jVDjHa0&index=18&t=1109s

class EasywayUseReduxWrapBiasc extends Component {
  render() {
    return (
      <div>
        EasywayUseReduxWrapBiasc
      </div>
    );
  }
}

export default EasywayUseReduxWrapBiasc;