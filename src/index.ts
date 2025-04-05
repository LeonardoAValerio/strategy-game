import express from "express"
import { config } from "dotenv"
import { createServer } from "node:http";
import { Server } from "socket.io";
config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

const port = process.env.PORT || "8000";
const games: string[] = [];

server.listen(port, () => {
    console.log(`Server starter in port: ${port}`);
});

app.post("/createGame", () => {
    io.of("/games/" + "1").on("connection", (socket) => {

    })
});


