import React from 'react';
import classNames from 'classnames';

const TodoItem = ({ id, isDone, task, createDate, onUpdate, onDelete }) => {
  return (
    <li key={id} className='flex gap-3 items-center'>
      <input
        type='checkbox'
        checked={isDone}
        onChange={() => {
          onUpdate(id);
        }}
      />
      <strong className={classNames('text-lg', isDone ? 'line-through' : null)}>{task}</strong>
      <span className='ml-auto text-sm text-gray-400'>{createDate}</span>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
