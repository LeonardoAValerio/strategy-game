import { Router } from "express";
import { getGameController, postGameController } from "../controllers/game";

const gameRoutes = Router();

gameRoutes.post("/", postGameController);
gameRoutes.get("/", getGameController);

export { gameRoutes };