import Constants from '../../Constants'
import Requests from '../'


export default class FluxRequests extends Requests {
    async query(query: string) {
        const body = {
            query: query,
            dialect: {
                header: true,
                delimiter: ',',
                quoteChar: '"',
                commentPrefix: "#",
                annotations: [
                    "datatype","group","default"
                ]
            },
            type: 'flux'
        }

        return await this.post(`${Constants.Influx.URL}?org=${Constants.Influx.ORG}`, body)
    }
}
