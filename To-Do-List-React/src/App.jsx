import { useState } from "react";
import "./style.css";

function App() {
  const [newItem, setNewItem] = useState("");

  return (
      <>
        <form className="new-item-form">
          <div className="form-row">
            <label htmlFor="item">New Item To add</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
          </div>
          <button className="button">Add</button>
        </form>
        <h1 className="header">To-Do-List</h1>
        <ul className="list">
          <li>
            <label>
              <input type="checkbox" />Item 1
              <button className="btn btn-danger">Delete</button>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />Item 2
              <button className="btn btn-danger">Delete</button>
            </label>
          </li>
        </ul>
      </>);
}

export default App
