import { Map } from "../../models/map/map";
import { NoiseMap } from "../../models/map/noiseMap";

export interface GameAttributes {
    rows: number;
    columns: number;
}

export class Game {
    private _map: Map;
    
    constructor(attributes: GameAttributes) {
        this._map = new Map({noiseMap: new NoiseMap({
            columns: attributes.columns,
            rows: attributes.rows,
            max: 5,
            min: 0
        })});
    }
}