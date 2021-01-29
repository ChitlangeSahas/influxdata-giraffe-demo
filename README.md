# Giraffe sample app
<img src="https://influxdata.github.io/branding/img/mascots/mascot-chronograf--white_png.png" height="100" alt="giraffe"/>

The following layers are currently demo-ed in the app:
```
GaugeLayer 
HeatMapLayer
HistogramLayer
LineLayer
ScatterLayer
SingleStateLayer
TableLayer
```

## Install and Start App
```
yarn
yarn start
```

## Data
For valid data, change the query in `FluxRequests` class

## Environment config
The .env needs to be configured with appropriate `URL's` and `TOKENS`. The `.env.sample` is provided as a template:
```
REACT_APP_INFLUX_TOKEN=YOUR_ACCESS_TOKEN
REACT_APP_INFLUX_ORG=YOUR_ORG_ID
REACT_APP_INFLUX_BUCKET=YOUR_BUCKET_NAME
REACT_APP_INFLUX_URL=YOUR_INFLUX_URL
```

## Giraffe configuration guide
https://github.com/influxdata/giraffe/blob/master/giraffe/README.md#config
