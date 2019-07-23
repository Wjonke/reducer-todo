import React, { useReducer } from 'react';

import { reducer, initialState } from './reducers/reducer';
import {TodoList} from './components/TodoList';
// import {AddTodo} from './components/AddTodo';



import './App.css';

const App =() => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (event, todo) => {
    event.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  const toggleTodo = todoId => {
    dispatch({ type: 'TOGGLE_TODO', payload: todoId });
  };

  const clearCompleted = event => {
    event.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (

  <div className="App">
    <div className="header">
        <h1>Todo List</h1>
        {/* <AddTodo addTodo={addTodo} /> */}
      </div>
      <TodoList
        todos={state.todos}
        toggleTodo={toggleTodo}
        clearCompleted={clearCompleted}
      />

    
    </div>
  );
}

export default App;
