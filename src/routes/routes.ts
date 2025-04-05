import { Router } from "express";
import { gameRoutes } from "./game";

const routes = Router();

routes.use("/games", gameRoutes);

export { routes };