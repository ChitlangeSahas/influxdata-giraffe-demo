import Constants from '../Constants'

export default class Requests {
    private _getDefaultHeaders() {
        const headers = new Headers()
        
        headers.append('Authorization', `Token ${Constants.Influx.TOKEN}`)
        headers.append('Content-Type', 'application/json')
        headers.append('accept', '*/*')
        headers.append('origin', 'http://localhost:3000')
        headers.append('sec-fetch-site', 'cross-site')
        headers.append('sec-fetch-mode', 'cors')
        headers.append('sec-fetch-dest', 'empty')

        return headers
    }

    async post(url: string, body: any) {
        var request = new Request(url, {
            method: 'POST',
            headers: this._getDefaultHeaders(),
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body)
        })
        return await fetch(request).then(r => r.text()).then(r => r)
    }
}
