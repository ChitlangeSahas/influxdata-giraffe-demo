import Constants from '../../Constants'

export default class Configuration {
    Mapping = {
        'line': 'Line Layer',
        'gauge': 'Gauge Layer',
        'scatter': 'Scatter Layer',
        'heatmap' : 'Heatmap Layer',
        'band' : 'Band Layer',
        'single stat' : "Single stat Layer",
        'histogram' : "Histogram stat Layer",
        'table' : "Table stat Layer",
    }
    
    constructor(configType) {
        this.type = configType
    }

    getTitle() {
        return this.Mapping[this.type]
    }

    getQuery() {
        // Base Query
        return [
            `from(bucket: "${Constants.Influx.BUCKET}")`,
            'range(start: -7d)',
            'filter(fn: (r) => r._measurement == "mem")',
            'filter(fn: (r) => r._field == "used_percent")',
            'aggregateWindow(every: 1m, fn: mean, createEmpty: false)',
            'yield(name: "mean")'
        ].join(' |> ')
    }
}
