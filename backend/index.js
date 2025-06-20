const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");
const testRoute = require("./routes/testRoute");

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://testapp-six-ochre.vercel.app", // your Vercel frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "https://testapp-six-ochre.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/test", testRoute);

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("✅ Socket connected:", socket.id);

  socket.on("client-message", (data) => {
    console.log("📩 Message from client:", data);
    socket.emit("server-response", `Server received: ${data}`);
  });

  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
