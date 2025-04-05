import { Tile } from "../tile";

export class Ocean extends Tile {
    constructor() {
        super();
        this.name = "ocean";
        this.size = 1;
    }
}