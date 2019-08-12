import React from 'react';

import TodoItem from './TodoItem';

export const TodoList = props => {



  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Complete
      </button>
    </div>
  );
};

