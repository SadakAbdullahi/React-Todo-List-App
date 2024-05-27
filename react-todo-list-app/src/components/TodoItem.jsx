import React, { useContext, useCallback } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoContext);

  const handleToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  }, [dispatch, todo.id]);

  const handleDelete = useCallback(() => {
    dispatch({ type: 'REMOVE_TODO', payload: todo.id });
  }, [dispatch, todo.id]);

  if (!todo) {
    return null;
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''} flex items-center justify-between p-2`}>
      <div 
        className="flex-grow cursor-pointer" 
        onClick={handleToggle}
      >
        {todo.text}
      </div>
      <button 
        onClick={handleDelete} 
        className="bg-red-500 text-white rounded-lg px-2 py-1 hover:bg-red-600 transition duration-150 ml-4"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
