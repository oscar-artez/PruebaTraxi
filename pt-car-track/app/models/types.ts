// Define propiedades generales que pueden estar en GeoJSON
export interface GeoJsonProperties {
  [key: string]: any; // Puedes definir propiedades específicas si es necesario
}

// Define geometría con posibles tipos
export type Geometry =
  | {
      type: "Point";
      coordinates: [number, number]; // Coordenadas para "Point"
    }
  | {
      type: "LineString";
      coordinates: [number, number][]; // Array de coordenadas para "LineString"
    };

// Define una Feature con una geometría y propiedades específicas
export interface Feature<G extends Geometry = Geometry, P = GeoJsonProperties> {
  type: "Feature";
  geometry: G;
  properties: P;
}

// Define una FeatureCollection con un array de Features
export interface FeatureCollection<G extends Geometry = Geometry, P = GeoJsonProperties> {
  type: "FeatureCollection";
  features: Array<Feature<G, P>>;
}

// Define GeoJsonObject que es una FeatureCollection
export interface GeoJsonObject {
  type: "FeatureCollection";
  features: Feature[];
}

// Define el tipo MapRoute que contiene la propiedad geojson como GeoJsonObject
export interface MapRoute {
  route_title: string;
  route_id: string;
  geojson: GeoJsonObject;
}
