'use client';

import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

const TodoEditor = ({ addTodo }) => {
  const [task, setTask] = useState('');

  // inputRef 변수가 useRef()를 통해 생성된 객체를 참조하도록 설정
  const inputRef = useRef();

  const onSubmit = () => {
    // 빈 입력 방지
    if (!task) return;

    // 할 일 추가
    addTodo(task);
    // 입력창 초기화
    setTask('');
    inputRef.current.focus();
  };

  const onChangeTask = (e) => {
    setTask(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit();
    if (e.key === 'Escape') {
      setTask('');
      inputRef.current.focus();
    }
    console.log(e);
  };

  return (
    <div>
      <h2>새로운 Todo 작성하기</h2>
      <div>
        <form className='flex'>
          <div className='relative grow'>
            <input type='text' value={task} ref={inputRef} onChange={onChangeTask} onKeyDown={onKeyDown} placeholder='할 일을 입력하세요.' className='border p-3 w-full' />
            {task ? (
              <button
                className='absolute right-2 top-1'
                onClick={() => {
                  setTask('');
                  inputRef.current.focus();
                }}
              >
                <IoMdCloseCircle />
              </button>
            ) : (
              ''
            )}
          </div>
          <button type='submit' onClick={onSubmit} disabled={!task} className={classNames('p-3', task ? 'bg-blue-400' : 'bg-gray-300')}>
            할 일 추가
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoEditor;
