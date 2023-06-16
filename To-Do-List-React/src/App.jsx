// Importing necessary files
import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import "./style.css";

// Overarching app component.
function App() {

const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("ITEMS")
  if (localValue == null) return []

  return JSON.parse(localValue);
});

useEffect(() => {
  localStorage.setItem("ITEMS", JSON.stringify(todos))
}, [todos])

function addTodo(title) {
  setTodos(currentTodos => {
    return [
      ...currentTodos,
      {id: crypto.randomUUID(), title, completed: false},
    ]
  })
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
        <TodoForm onSubmit={addTodo} />
        <h1 className="header">To-Do-List</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </>);
}

export default App
