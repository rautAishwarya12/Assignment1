import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todo, setTodo] = useState('');  
  const [todos, setTodos] = useState([]); 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);  
    }
  }, []);

 
  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todo) {  
      const newTodos = [...todos, {text: todo}]; 
      setTodos(newTodos);
      setTodo('');  
      localStorage.setItem('todos', JSON.stringify(newTodos));
    }
  };
  return (
    <div>
      <h1>TODO App</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todo}
          onChange={handleInputChange}
          placeholder="Enter a task"
          required
        />
        <button type="submit">Add TODO</button>
      </form>

      <h2>Todo List</h2>
      {todos.length === 0 ? (
        <p>No tasks</p>
      ) : (
        <table border="1" style={{ width: '10%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr>
                <td>{todo.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoApp;