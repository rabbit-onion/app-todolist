import React from 'react';

const Todo = () => {
  return (
    <div>
      {/* TodoHd.jsx */}
      <div>
        <h2>2024.11.21</h2>
        <span>오늘의 할 일을 적어보세요.</span>
      </div>

      {/* TodoEditor.jsx */}
      <div>
        <h2>새로운 Todo 작성하기</h2>
        <input type='text' />
        <button>할 일 추가</button>
      </div>

      {/* TodoList.jsx */}
      <div>
        <h2>할 일 목록</h2>
        <input type='text' />
        <ul>
          <li>
            <strong>고양이 밥주기</strong>
            <span>2024.11.21</span>
            <button>삭제</button>
          </li>
          <li>
            <strong>감자 캐기</strong>
            <span>2024.11.21</span>
            <button>삭제</button>
          </li>
          <li>
            <strong>고양이 놀아주기</strong>
            <span>2024.11.21</span>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
