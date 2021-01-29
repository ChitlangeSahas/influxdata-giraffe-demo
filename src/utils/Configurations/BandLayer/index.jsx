import Configuration from '../Configuration'
import NINETEEN_EIGHTY_FOUR from "@influxdata/giraffe"

class BandLayerConfig extends Configuration {
    constructor() {
        super('band')
    }

    getConfig() {
        const layer = {
            type: 'band',
            x: '_time',
            y: '_value',
            fill: ["result"],
            colors: NINETEEN_EIGHTY_FOUR,
            interpolation: "monotoneX",
            lineWidth: 3,
            lineOpacity: 0.7,
            shadeOpacity: 0.3,
            hoverDimension: "auto",
            upperColumnName: "max",
            mainColumnName: "mean",
            lowerColumnName: "min",
        }

        return {
            layers: [layer]
        }
    }
}

export default BandLayerConfig
