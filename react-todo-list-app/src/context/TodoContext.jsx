import React, { createContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const initialState = {
  todos: [],
  filter: 'all',
};

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [storedState, setStoredState] = useLocalStorage('todoState', initialState);

  React.useEffect(() => {
    setStoredState(state);
  }, [state, setStoredState]);

  return (
    <TodoContext.Provider value={{ state: storedState, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
