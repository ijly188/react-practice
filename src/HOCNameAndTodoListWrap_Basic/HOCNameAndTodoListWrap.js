import React from 'react';

import NameList from './NameList';
import TodoList from './TodoList';

const HOCNameAndTodoListWrap = () => (
  <div>
    <NameList />
    <TodoList />
  </div>
);

export default HOCNameAndTodoListWrap;