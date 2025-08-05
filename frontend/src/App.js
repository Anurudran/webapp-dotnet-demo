import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const API_BASE = "http://localhost:5208";

  useEffect(() => {
    axios.get(`${API_BASE}/api/items`).then((res) => {
      setItems(res.data);
    });
  }, []);

  const handleAdd = () => {
    axios.post(`${API_BASE}/api/items`, { name: newItem }).then((res) => {
      setItems([...items, res.data]);
      setNewItem("");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Web App </h1>
      <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
