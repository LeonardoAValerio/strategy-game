import { Map } from "../../models/map/map";
import { NoiseMap } from "../../models/map/noiseMap";
import { Tile } from "../../models/tile/tile";

export interface GameAttributes {
    rows: number;
    columns: number;
}

export class GameService {
    private _map: Tile[][];
    
    constructor(attributes: GameAttributes) {
        this._map = new Map({noiseMap: new NoiseMap({
            columns: attributes.columns,
            rows: attributes.rows,
            max: 5,
            min: 0
        })}).map;
    }
}