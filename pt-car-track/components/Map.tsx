'use client'
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, LayersControl, GeoJSON,FeatureGroup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HomeContext from '../app/context/home'
import { CarsData, carsDataWithPosition } from '@/app/Vehicles/columns';
import L, { Layer, icon } from 'leaflet';
import { MapRoute } from '@/app/models/types'
import { Feature, Geometry, Point } from 'geojson'
import { useContext } from 'react';
import clsx from 'clsx';
import { Props } from 'next/script';


export default function Map(){
  const { mapRoutes, carSelected, setCarSelected} = useContext(HomeContext)
const exampleRoute = mapRoutes[0]
const defaultLocation: L.LatLng = L.geoJson(exampleRoute.geojson, {})
.getBounds()
.getCenter()


  return (
    <MapContainer center={defaultLocation} zoom={12} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LayersControl position="topleft">
          <LayersControl.Overlay checked name="Vehículos">
            <LayerGroup>
              {carsDataWithPosition.map((car: CarsData) => {
                return (
                  <Marker
                    key={car.placa}
                    position={car.positionCar}
                    icon={icon({
                      iconUrl: '/car.png',
                      iconSize: [55, 55],
                       className: `${clsx('hiddenCar', {
                         'blockCar':
                        carSelected !== null && car.placa === carSelected.placa,
                       })}`,
                    })}
                  >
                    <Popup className="map-popup marker">
                      <div className="flex flex-row gap-1 font-bold md:text-base">
                        <span>{car.BRAND}</span>
                        <span>{car.MODEL}</span>
                      </div>
                      <span className="mb-2 md:text-sm">
                        {car.placa}
                      </span>
                    </Popup>
                  </Marker>
                )
              })}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Ruta">
            <LayerGroup>
              {mapRoutes.map((route) => (
                <GeoJSON
                  key={route.route_id}
                  data={route.geojson}
                  pointToLayer={(
                    feature: Feature<Point>,
                    location: L.LatLng
                  ): Layer => {
                    return L.marker(location, {
                      icon: icon({
                        iconUrl: '/marker.png',
                        iconSize: [50, 50],
                      }),
                    })
                  }}
                  onEachFeature={(
                    feature: Feature<Geometry>,
                    layer: L.Layer
                  ): void => {
                    const name = feature?.properties?.name
                    const location = L.geoJSON(feature, {})
                      .getBounds()
                      .getCenter()
                    const locationText = `${location.lat}, ${location.lng}`

                    layer.bindPopup(name ?? locationText, {
                      className: 'map-popup trackPath',
                    })
                  }}
                  style={{
                    className: 'trackPath',
                  }}
                />
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
    </MapContainer>
  );
}


