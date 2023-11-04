import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:3000");
      const data = await res.json();
      console.log({ data });
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>all users</h1>
        {users.length > 0 &&
          users.map((item, index) => <div key={index}>{item.user}</div>)}
      </header>
    </div>
  );
}

export default App;
