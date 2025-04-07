const NoiseJS = require('noisejs');

export interface NoiseMapAttributes {
    rows: number
    columns: number
    min: number,
    max: number
    scale?: number; 
}

export class NoiseMap implements NoiseMapAttributes {
    rows: number
    columns: number
    min: number
    max: number
    scale: number;
    private _map: number[][]

    constructor(attributes: NoiseMapAttributes) {
        this.rows = attributes.rows;
        this.columns = attributes.columns;
        this.min = attributes.min;
        this.max = attributes.max;
        this.scale = attributes.scale || 0.1;
        this._map = this.generateNoiseMap();
    }

    private generateNoiseMap() {
        const range = this.max - this.min;
        const noise = new NoiseJS.Noise(Math.random());
        
        return Array.from({ length: this.rows }, (_, y) =>
            Array.from({ length: this.columns }, (_, x) => {
            const raw = noise.perlin2(x * this.scale, y * this.scale); // entre -1 e 1
            const normalized = (raw + 1) / 2;                 // agora entre 0 e 1
            return Math.floor(this.min + normalized * range);     // escala para [min, max]
            })
        );
    }

    get map() {
        return this._map;
    }
}