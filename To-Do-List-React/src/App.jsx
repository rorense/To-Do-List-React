import { useState } from "react";
import "./style.css";

// Overarching app component.
function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e)  {
  e.preventDefault();

  // Functionality for adding tasks.
  setTodos(currentTodos => {
    return [
      ...currentTodos,
      {id: crypto.randomUUID(), title: newItem, completed: false},
    ]
  })
  setNewItem("");
}

// Functionality for toggling tasks.
function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed}
      }
      return todo;
    })
  })
}

// Functionality for delete.
function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id);
  })
}

  // Returning JSX for rendering on page.
  return (
      <>
        <form onSubmit={handleSubmit}className="new-item-form">
          <div className="form-row">
            <label htmlFor="item">New Item To add</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
          </div>
          <button className="button">Add</button>
        </form>
        <h1 className="header">To-Do-List</h1>
        <ul className="list">
          {todos.length === 0 && "No To Dos"}
          {todos.map(todo => {
            return <li key={todo.id}>
                      <label>
                        <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>{todo.title}
                      </label>
                      <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
          })}
        </ul>
      </>);
}

export default App
