import { GeoJsonObject } from 'geojson'
import { LatLngTuple } from 'leaflet'

export interface MapRoute {
    route_title: string
    route_id: string
    geojson: GeoJsonObject
  }