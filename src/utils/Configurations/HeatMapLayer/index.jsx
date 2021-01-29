import Configuration from '../Configuration'
import { INFERNO} from "@influxdata/giraffe";

class HeatMapLayerConfig extends Configuration {
    constructor() {
        super('heatmap')
    }

    getConfig() {
        const layer = {
            type: "heatmap",
            x: "_time",
            y: "_value",
            colors: INFERNO
        }

        return {
            layers: [layer]
        }
    }
}

export default HeatMapLayerConfig
