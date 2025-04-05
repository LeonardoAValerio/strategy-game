import express, { json } from "express"
import { config } from "dotenv"
import { createServer } from "node:http";
import { Server } from "socket.io";
import { routes } from "./routes/routes";
config();

const app = express();
app.use(json());
app.use(routes);
app.get("/", (req, res) => {res.send({ version: "1.0", api: "strategy-game" })})

const server = createServer(app);
export const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

export const games: string[] = []

const port = process.env.PORT || "8000";

server.listen(port, () => {9
    console.log(`Server starter in port: ${port}`);
});


