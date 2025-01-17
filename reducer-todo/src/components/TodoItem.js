import React from 'react';

const TodoItem = props => {

  
  return (
    <div
      className={`todo${props.todo.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      <p>{props.todo.name}</p>
    </div>
  );
};

export default TodoItem;