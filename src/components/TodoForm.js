import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input"
      placeholder="Add items to the list" 
      value={value} 
      onChange={e => setValue(e.target.value)} />
    </form>
  )
};

export default TodoForm;