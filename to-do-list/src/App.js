import React, { useState } from "react";
function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }
  function handleClick() {
    setList((prevValue) => [...prevValue, item]);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((list, index) => (
            <li key={index}>{list}</li> // Map each item to a <li> element
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
