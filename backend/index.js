import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/auth.routes.js";
import { ConnectDB } from "./db/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: "*",
  credentials: true,
});

// Connect to the database
ConnectDB();

// Configure dotenv
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5174", credentials: true })); // CORS for REST API
app.use(cookieParser());

// API Routes
app.use("/api/auth", router);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Hi" });
});

io.on("connection", (socket) => {
  console.log(`Request received to connect`)
  socket.emit("welcome",socket.id);
  console.log(`Socket connected`)

  socket.on("messageToAll",(msg)=>{
    console.log(msg)
    socket.broadcast.emit("others",msg)
  })

  socket.on("message", ({message,roomcode}) => {
    socket.to(roomcode).emit("message-received",message)
  });
});

// Start the server on the specified port
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
