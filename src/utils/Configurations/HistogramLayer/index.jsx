import Configuration from '../Configuration'

class HistogramLayerConfig extends Configuration {
    constructor() {
        super('histogram')
    }

    getConfig() {

        const layer = {
            type: 'histogram',
            x: "_value"
        }

        return {
            layers: [layer]
        }
    }
}

export default HistogramLayerConfig
