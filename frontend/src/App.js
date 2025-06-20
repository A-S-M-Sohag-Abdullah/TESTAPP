import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io(process.env.REACT_APP_API_BASE_URL, {
  withCredentials: true,
});

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    // Listen for messages from the server
    socket.on("server-response", (msg) => {
      setResponse(msg);
    });

    // Send a test message to server
    socket.emit("client-message", "Hello from frontend");

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Socket.IO Test</h1>
      <p>Server Response: {response}</p>
    </div>
  );
}

export default App;
