'use client';

import React, { useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockTodoData } from '@/data/todoData';

const Todo = () => {
  const [todos, setTodos] = useState(mockTodoData);

  // 할 일 추가 함수
  const addTodo = (task) => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      task: task,
      createDate: new Date().toLocaleDateString(),
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div>
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList mockTodoData={todos} />
    </div>
  );
};

export default Todo;
