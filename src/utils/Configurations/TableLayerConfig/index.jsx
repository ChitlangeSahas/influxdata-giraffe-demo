import Configuration from '../Configuration'
import {DEFAULT_TABLE_COLORS} from "@influxdata/giraffe";

class TableLayerConfig extends Configuration {
    constructor() {
        super('table')
    }

    getConfig() {

        const layer = {
            type: 'table',
            properties: {
                colors: DEFAULT_TABLE_COLORS,
                tableOptions: {
                    fixFirstColumn: false,
                    verticalTimeAxis: true,
                },
                fieldOptions: [
                    {
                        displayName: '_start',
                        internalName: '_start',
                        visible: true,
                    },
                    {
                        displayName: '_stop',
                        internalName: '_stop',
                        visible: true,
                    },
                    {
                        displayName: '_time',
                        internalName: '_time',
                        visible: true,
                    },
                    {
                        displayName: '_value',
                        internalName: '_value',
                        visible: true,
                    },
                    {
                        displayName: '_field',
                        internalName: '_field',
                        visible: true,
                    },
                    {
                        displayName: '_measurement',
                        internalName: '_measurement',
                        visible: true,
                    },
                    {
                        displayName: 'cpu',
                        internalName: 'cpu',
                        visible: true,
                    },
                    {
                        displayName: 'host',
                        internalName: 'host',
                        visible: true,
                    },
                ],
                timeFormat: 'YYYY-MM-DD HH:mm:ss ZZ',
                decimalPlaces: {
                    isEnforced: true,
                    digits: 3
                },
            },
            timeZone: 'Local',
            tableTheme : 'light'
        }

        return {
            layers: [layer]
        }
    }
}

export default TableLayerConfig