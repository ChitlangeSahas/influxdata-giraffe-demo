import Configuration from '../Configuration'
import {NINETEEN_EIGHTY_FOUR} from "@influxdata/giraffe";


class ScatterLayerConfig extends Configuration {
    constructor() {
        super('scatter')
    }

    getConfig() {
        return {
            layers: [{
                type: this.type,
                x: "_time",
                y: "_value",
                colors: ["#066fc5"]
            }]
        }
    }
}

export default ScatterLayerConfig
