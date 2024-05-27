import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

function TodoFilter() {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="flex justify-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg">
      <button
        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
        className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
          state.filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
        }`}
      >
        All
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
        className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
          state.filter === 'active' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
        }`}
      >
        Active
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
        className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
          state.filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'incomplete' })}
        className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
          state.filter === 'incomplete' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
        }`}
      >
        Incomplete
      </button>
    </div>
  );
}

export default TodoFilter;
