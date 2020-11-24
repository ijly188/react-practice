import React, { Component } from 'react';
// ref link: https://www.youtube.com/watch?v=upq6WEAAE3Y&t=1471s
// https://github.com/shiningjason/react-quick-tutorial/tree/master/level-19_redux
import { combineReducers, createStore } from 'redux';

// 會分離出來會成為一個reducer
const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      return state = {...state, name: action.payload };
    }
    case 'CHANGE_AGE': {
      return state = {...state, age: action.payload };
    }
    /**
     * case沒有return state會報錯
     * Error: Given action "CHANGE_NAME", reducer "user" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.
     */
    default:
      return state;
    /**
     * 沒給default會報錯
     * Error: Reducer "user" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.
     */
  }
};

const tweetsReducer = (state=[], action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

// 分離出來成為store
const store = createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // 有這行才會有redux devtool可以看
);

/**
 * 這裏console.log裡面會有
 * 初始不顯示：{}
 * 第一次action後：{name: "Allen"}
 * 第二次action後：{name: "Allen", age: 35}
 * 這樣不會改到初始的object，就是可以做到Object.assign()就是所謂的深拷貝
 */

// UI
store.subscribe(() => {
  console.log(store.getState().user);
})

store.dispatch({ type: 'CHANGE_NAME', payload: "Allen"});
store.dispatch({ type: 'CHANGE_AGE', payload: 35});

class ReduxBasicConstructor extends Component {
  render() {
    return (
      <div>
        ReduxBasicConstructor
      </div>
    );
  }
}

export default ReduxBasicConstructor;