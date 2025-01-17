/////////initial state Below for todo list///////////
//this is where I would do my axios call to get init state otherwise.

export const initialState = {
  todos: [
    {
      name: 'Learn about reducers',
      completed: false,
      id: '000001'
    },
    {
      name: 'Get ready for build week',
      completed: false,
      id: '000002'
    },
    {
      name: 'Take Breaks!',
      completed: false,
      id: '000003'
    },
  ]
};



//////////////////Reducer(s) Below//////////////////////


export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        name: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };

    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };

    default:
      return state;
  }
};