import { Request, Response } from "express";
import { games } from "..";
import { randomUUID } from "crypto";
import { Game } from "../services/game/game";

export function postGameController(req: Request, res: Response) {
    try {
        const { rows, columns } = req.body;
        const id = randomUUID()
        games[id] = new Game({ rows, columns });
        res.send({ id });
    } catch(e) {
        res.status(500).send({error: e});
    }
}