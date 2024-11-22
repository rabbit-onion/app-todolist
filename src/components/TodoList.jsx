import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mockTodoData, onUpdate, onDelete }) => {
  // console.log(mockTodoData);
  const [search, setSearch] = useState('');

  const filteredTodos = () => {
    return (
      // array.filter(function(currentValue, index, arr), thisValue)
      mockTodoData.filter((item) => {
        return item.task.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  return (
    <div>
      <h2>할 일 목록</h2>
      <input
        type='search'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder='검색어를 입력하세요.'
        className='p-3 text-black w-full border'
      />
      <ul className='flex flex-col gap-2'>{filteredTodos().map((item) => (console.log(item), (<TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />)))}</ul>
    </div>
  );
};

export default TodoList;
