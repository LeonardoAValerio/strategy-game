import { Request, Response } from "express";
import { games, io } from "..";
import { randomUUID } from "crypto";
import { Game } from "../services/game/game";
import { ListenerGame } from "../listeners/game";

export function postGameController(req: Request, res: Response) {
    try {
        const { rows, columns, maxPlayers } = req.body;
        const id = randomUUID()
        games[id] = new Game({ rows, columns });
        new ListenerGame({
            io: io.of("/games/" + id),
            id,
            maxPlayers
        }).init();
        res.send({ id });
    } catch(e) {
        res.status(500).send({error: e});
    }
}

export function getGameController(req: Request, res: Response) {
    try {
        res.send({ games });
    } catch(e) {
        res.status(500).send({error: e});
    }
}