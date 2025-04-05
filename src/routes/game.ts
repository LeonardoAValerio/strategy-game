import { Router } from "express";
import { postGameController } from "../controllers/game";

const gameRoutes = Router();

gameRoutes.post("/", postGameController);