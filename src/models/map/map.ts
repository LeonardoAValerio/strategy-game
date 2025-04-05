import { DeepOcean } from "../tile/imp/deepOcean";
import { Forest } from "../tile/imp/forest";
import { GrassLand } from "../tile/imp/grassLand";
import { HighMountain } from "../tile/imp/highMountain";
import { Mountain } from "../tile/imp/mountain";
import { Ocean } from "../tile/imp/ocean";
import { Tile } from "../tile/tile";
import { NoiseMap } from "./noiseMap";

export type TileRegister = Record<number, typeof Tile>;
const defaultTileRegistery: TileRegister = {
    0: DeepOcean,
    1: Ocean,
    2: GrassLand,
    3: Forest,
    4: Mountain,
    5: HighMountain,
};

export interface MapAttributes {
    noiseMap: NoiseMap;
    tileRegistry?: TileRegister;
}

export class Map {
    tileRegistry: TileRegister;
    map: Tile[][];

    constructor(attributes: MapAttributes) {
        this.tileRegistry = attributes.tileRegistry || defaultTileRegistery;
        this.map = attributes.noiseMap.map.map((row) => {
            return row.map((col) => {
                return this.setTileByValue(col);
            });
        });
    }

    private setTileByValue(value: number): Tile {
        const TileClass = this.tileRegistry[value];
        if (!TileClass) throw new Error(`Tile not found for value ${value}`);
        return new TileClass();
    }
}