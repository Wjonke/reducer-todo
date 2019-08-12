import React, { useState } from 'react';





export const AddTodo =(props) => {
  
  const [state, setState] = useState({todo:''});

  const handleChanges = event => {
    setState({ todo: event.target.value });
  };

  const submitTodo = event => {
    event.preventDefault();
    props.addTodo(state.todo);
    setState({ todo: '' });
  };

  return (
    
    <form onSubmit={submitTodo}>

      <input
        type="text"
        value={state.todo}
        name="item"
        onChange={handleChanges}
      />

      <button>Add Todo</button>

    </form>
  );
}


