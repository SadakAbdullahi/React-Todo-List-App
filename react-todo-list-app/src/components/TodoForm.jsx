import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import useInput from "../hooks/useInput";

function TodoForm() {
  const { value, onChange } = useInput('');
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      dispatch({ type: 'ADD_TODO', payload: value });
      onChange({ target: { value: '' } }); // Clear input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex items-center bg-white shadow-md rounded-lg p-4">
      <input
        type="text"
        placeholder="Add a new todo"
        value={value}
        onChange={onChange}
        className="border rounded-lg p-2 flex-grow outline-none focus:border-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 ml-2 hover:bg-blue-600 transition duration-150">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
