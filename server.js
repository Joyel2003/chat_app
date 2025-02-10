const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });

    socket.on("disconnected", () =>{
        console.log("A user disconnected");
    });
});

server.listen(3000, () =>{
    console.log("Server running on http://localhost:3000");
});