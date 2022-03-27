import React, { useState } from "react";

function App() {
  const [list, addToList] = useState([]); // list of items
  const [input, setInput] = useState(""); // input value

  const addTodo = (todo) => {
    const newTodo = {
      todo: todo,
      id: Math.random() 
    };

    // adds the input value to the list
    addToList([...list, newTodo]);

    // clears the input value
    setInput("");
  };

  const deleteTodo = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    addToList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} 
      />
      <button className="addBtn" onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}> ✓ </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
