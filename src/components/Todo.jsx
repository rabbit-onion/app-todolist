import React from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const mockTodoData = [
  {
    id: 1,
    isDone: false,
    task: '고양이 밥주기',
    createDate: '2024.11.21',
  },
  {
    id: 2,
    isDone: false,
    task: '감자 캐기',
    createDate: '2024.11.21',
  },
  {
    id: 3,
    isDone: false,
    task: '고양이 놀아주기',
    createDate: '2024.11.21',
  },
];

const Todo = () => {
  return (
    <div>
      <TodoHd />
      <TodoEditor />
      <TodoList />
    </div>
  );
};

export default Todo;
