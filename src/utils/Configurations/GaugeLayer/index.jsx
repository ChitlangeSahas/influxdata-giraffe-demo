import Configuration from '../Configuration'

class GaugeLayerConfig extends Configuration {
    constructor() {
        super('gauge')
    }

    getConfig() {
        const layer = {
            type: "gauge",
            gaugeColors: [{
                id: 'red',
                type: 'min',
                hex: '#8e1fc3',
                name: 'Red',
                value: 0
            },{
                id: 'blue',
                type: 'threshold',
                hex: '#066fc5',
                name: 'Blue',
                value: 100
            }],
            gaugeTheme: {
                valueColor : "#066fc5"
            }
        }
    
        return {
            layers: [layer]
        }
    }
}

export default GaugeLayerConfig
