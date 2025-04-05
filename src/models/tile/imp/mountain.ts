import { Tile } from "../tile";

export class Mountain extends Tile {
    constructor() {
        super();
        this.name = "mountain";
        this.size = 4;
    }
}