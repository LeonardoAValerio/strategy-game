import { Request, Response } from "express";
import { io, games } from "..";
import { randomUUID } from "crypto";
import { ListenerGame } from "../listeners/game";

export function postGameController(req: Request, res: Response) {
    try {
        const { rows, columns, maxPlayers } = req.body;
        const id = randomUUID();
        games.push(id);
        
        new ListenerGame({
            io: io.of("/games/" + id),
            id,
            maxPlayers,
            rows,
            columns
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