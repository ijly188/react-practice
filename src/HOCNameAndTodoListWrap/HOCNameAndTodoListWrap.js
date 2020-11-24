import React from 'react';

import List from './List';
import withName from './hocs/withName';
import withTodo from './hocs/withTodo';

const NameList = withName(List);
const TodoList = withTodo(List);

const HOCNameAndTodoListWrap = () => (
  <div>
    <NameList />
    <TodoList />
  </div>
);

export default HOCNameAndTodoListWrap;