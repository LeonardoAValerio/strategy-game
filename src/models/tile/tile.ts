import { randomUUID } from "node:crypto";

export interface TileAttributes {
    id: string;
    name: string;
    size: number;
    cost: number;
}

export class Tile implements TileAttributes {
    id: string;
    name: string;
    size: number;
    cost: number;

    constructor() {
        this.id = randomUUID();
        this.name = "";
        this.size = -1;
        this.cost = 1;
    }
}