/**
 * Created by baranvoj on 3/20/2017.
 */

export interface INNOutput {
    windows: number,
    blinders: number,
    heat: number,
}

export class NNOutput implements INNOutput {
    windows: number;
    blinders: number;
    heat: number;


    constructor(windows: number, blinders: number, heat: number) {
        this.windows = windows;
        this.blinders = blinders;
        this.heat = heat;
    }
}
