'use client';

import React, { useEffect, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockTodoData } from '@/data/todoData';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  // 마운트 시
  useEffect(() => {
    // localStorage의 데이터를 가져와
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    // todos 상태에 저장
    setTodos(savedTodos);
    console.log(savedTodos);
  }, []);

  // 업데이트 시
  useEffect(() => {
    // localStorage에 데이터를 저장
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    const newTodo = {
      id: todos.length + 1,
      isDone: false,
      task: task,
      createDate: new Date().toLocaleDateString(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='m-5 p-5 flex flex-col gap-5 border border-gray-300'>
      <TodoHd />
      <TodoEditor addTodo={addTodo} />
      <TodoList mockTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
};

export default Todo;
