import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/test`)
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Frontend</h1>
      <p>API Response: {data}</p>
    </div>
  );
}

export default App;
