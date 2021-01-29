import Configuration from '../Configuration'
import {NINETEEN_EIGHTY_FOUR} from "@influxdata/giraffe";


class LineLayerConfig extends Configuration {
    constructor() {
        super('line')
    }

    getConfig() {
        return {
            layers: [{
                type: "line",
                x: "_time",
                y: "_value",
                lineWidth : 5,
                interpolation : "natural",
                colors: ["#066fc5"]
            }]
        }
    }
}

export default LineLayerConfig
