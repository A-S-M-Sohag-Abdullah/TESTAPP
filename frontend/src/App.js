import React, { useEffect, useState } from "react";
import axiosInstance from "./api/axiosInstance";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/api/test");
        setMessage(res.data.message);
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Frontend</h1>
      <p>API Response: {message}</p>
    </div>
  );
}

export default App;
