import React, { Component } from 'react';
// ref link: https://www.youtube.com/watch?v=upq6WEAAE3Y&t=1471s
// https://github.com/shiningjason/react-quick-tutorial/tree/master/level-19_redux
import { createStore } from 'redux';

// 會分離出來會成為一個reducer
const reducer = (state, action) => {
  if (action.type === 'INCREASEMENT') {
    return state += action.payload;
  }
  if (action.type === 'DECREASEMENT') {
    return state -= action.payload;
  }
  return state;
};

// 分離出來成為store
const store = createStore(
  reducer,
  0,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// UI
store.subscribe(() => {
  console.log('store changed: ' + store.getState());
})

store.dispatch({ type: 'INCREASEMENT', payload: 1});
store.dispatch({ type: 'INCREASEMENT', payload: 2});
store.dispatch({ type: 'INCREASEMENT', payload: 5});
store.dispatch({ type: 'DECREASEMENT', payload: 22});

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