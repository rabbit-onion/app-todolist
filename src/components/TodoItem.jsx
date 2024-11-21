import React from 'react';

const TodoItem = ({ isDone, task, createDate }) => {
  return (
    <div>
      <li>
        <input type='checkbox' checked={isDone} />
        <strong>{task}</strong>
        <span>{createDate}</span>
        <button>삭제</button>
      </li>
    </div>
  );
};

export default TodoItem;
