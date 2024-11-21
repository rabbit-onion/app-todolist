import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mockTodoData }) => {
  // console.log(mockTodoData);
  return (
    <div>
      <h2>할 일 목록</h2>
      <input type='text' />
      <ul>{mockTodoData.map((item) => (console.log(item), (<TodoItem key={item.id} {...item} />)))}</ul>
    </div>
  );
};

export default TodoList;
