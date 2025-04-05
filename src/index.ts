import express from "express"
import { config } from "dotenv"
import { createServer } from "node:http";
import { Server } from "socket.io";
import { Game } from "./services/game/game";
config();

const app = express();
const server = createServer(app);
export const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

export const games: Record<string, Game> = {}

const port = process.env.PORT || "8000";

server.listen(port, () => {
    console.log(`Server starter in port: ${port}`);
});


