
import HomeProvider from '@/components/HomeProvider';
import CarList from './Vehicles/page';
import { MapRoute } from "./models/types";
import dynamic from 'next/dynamic';
import dummyData from '../assets/mapRoutesMock.json'; 
export default async function Home() {

  const exampleRoutes: MapRoute[] = [
    {
      route_title: "R01 TLALNEPANTLA",
      geojson: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-99.213625, 19.542187]
            },
            properties: {
              name: "RODEO STA FE (WALMART PIRULES)",
              address: "",
              type: "in"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-99.203852, 19.42779]
            },
            properties: {
              name: "TRAXI MONTES URALES",
              address: "",
              type: "out"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: [
                [-99.21365, 19.5422],
                [-99.21323, 19.54283],
                [-99.21301, 19.54324],
                [-99.21301, 19.54327],
                [-99.21304, 19.5433],
                [-99.21294, 19.54348],
                [-99.21289, 19.54347],
                [-99.21279, 19.54327],
                [-99.21297, 19.54299],
                [-99.21359, 19.54202],
                [-99.2142, 19.54104],
                [-99.21448, 19.54057],
                [-99.21465, 19.5403],
                [-99.21534, 19.53926],
                [-99.21614, 19.53819],
                [-99.21741, 19.53656],
                [-99.21771, 19.53615],
                [-99.21769, 19.5361],
                [-99.21774, 19.53599],
                [-99.21786, 19.53578],
                [-99.218, 19.53558],
                [-99.21821, 19.53529],
                [-99.21832, 19.53505],
                [-99.21891, 19.53425],
                [-99.22006, 19.53274],
                [-99.22172, 19.53059],
                [-99.22336, 19.52845],
                [-99.22464, 19.52675],
                [-99.22545, 19.5257],
                [-99.22751, 19.52298],
                [-99.22846, 19.52176],
                [-99.22964, 19.52024],
                [-99.2301, 19.51962],
                [-99.23083, 19.51861],
                [-99.23196, 19.51716],
                [-99.2323, 19.5168],
                [-99.23276, 19.5162],
                [-99.23365, 19.51501],
                [-99.23398, 19.51458],
                [-99.23421, 19.51428],
                [-99.23505, 19.51317],
                [-99.23556, 19.51239],
                [-99.2356, 19.51232],
                [-99.23573, 19.51207],
                [-99.23596, 19.51156],
                [-99.23616, 19.51107],
                [-99.2364, 19.5104],
                [-99.2366, 19.50962],
                [-99.23676, 19.50875],
                [-99.23682, 19.50807],
                [-99.23685, 19.50703],
                [-99.23688, 19.50508],
                [-99.23691, 19.5024],
                [-99.23693, 19.50155],
                [-99.23695, 19.50132],
                [-99.23697, 19.50114],
                [-99.23717, 19.50008],
                [-99.23722, 19.49968],
                [-99.23723, 19.49913],
                [-99.23722, 19.4989],
                [-99.23714, 19.49824],
                [-99.23705, 19.49774],
                [-99.23697, 19.4972],
                [-99.23703, 19.4923],
                [-99.237, 19.49114],
                [-99.23695, 19.4903],
                [-99.23684, 19.4895],
                [-99.2367, 19.48899],
                [-99.2366, 19.48871],
                [-99.23645, 19.48838],
                [-99.23627, 19.48797],
                [-99.23595, 19.48737],
                [-99.23573, 19.48692],
                [-99.23518, 19.48583],
                [-99.23408, 19.48373],
                [-99.2325, 19.48069],
                [-99.23151, 19.47877],
                [-99.23041, 19.47668],
                [-99.23008, 19.47609],
                [-99.22965, 19.47523],
                [-99.22936, 19.47467],
                [-99.22885, 19.47368],
                [-99.22831, 19.47266],
                [-99.22783, 19.47171],
                [-99.22675, 19.46964],
                [-99.22634, 19.46884],
                [-99.22448, 19.4653],
                [-99.22387, 19.46412],
                [-99.22364, 19.46362],
                [-99.22325, 19.46289],
                [-99.2224, 19.46126],
                [-99.22166, 19.45988],
                [-99.22109, 19.45875],
                [-99.22101, 19.45861],
                [-99.22053, 19.4577],
                [-99.22026, 19.45709],
                [-99.22017, 19.45682],
                [-99.22008, 19.45643],
                [-99.22003, 19.45602],
                [-99.22002, 19.45507],
                [-99.22003, 19.45368],
                [-99.22002, 19.45303],
                [-99.22004, 19.4523],
                [-99.22008, 19.45169],
                [-99.22021, 19.44943],
                [-99.22023, 19.44894],
                [-99.22024, 19.44737],
                [-99.22022, 19.44634],
                [-99.2202, 19.4461],
                [-99.22015, 19.44592],
                [-99.22009, 19.44571],
                [-99.21996, 19.44545],
                [-99.2197, 19.44511],
                [-99.21951, 19.44493],
                [-99.21928, 19.44476],
                [-99.21903, 19.44462],
                [-99.21817, 19.44423],
                [-99.21777, 19.44401],
                [-99.21745, 19.44378],
                [-99.21735, 19.44369],
                [-99.21708, 19.44338],
                [-99.21658, 19.44286],
                [-99.21607, 19.44225],
                [-99.21577, 19.44181],
                [-99.21534, 19.44104],
                [-99.21443, 19.4393],
                [-99.21407, 19.43855],
                [-99.21324, 19.43679],
                [-99.21292, 19.43621],
                [-99.21235, 19.43543],
                [-99.21218, 19.43522],
                [-99.21215, 19.43517],
                [-99.21194, 19.43495],
                [-99.21127, 19.43433],
                [-99.21048, 19.4337],
                [-99.21003, 19.43335],
                [-99.2098, 19.43314],
                [-99.2097, 19.43299],
                [-99.20924, 19.43199],
                [-99.20904, 19.43163],
                [-99.20893, 19.43151],
                [-99.20861, 19.43134],
                [-99.20845, 19.43131],
                [-99.2082, 19.43128],
                [-99.20786, 19.43127],
                [-99.2077, 19.43124],
                [-99.20753, 19.43118],
                [-99.20748, 19.43115],
                [-99.20686, 19.43074],
                [-99.20634, 19.43034],
                [-99.20551, 19.42973],
                [-99.2053, 19.42957],
                [-99.2053, 19.42951],
                [-99.20529, 19.42947],
                [-99.20507, 19.42931],
                [-99.20469, 19.42903],
                [-99.20431, 19.4287],
                [-99.20363, 19.42802],
                [-99.20356, 19.42793],
                [-99.20355, 19.42788],
                [-99.20357, 19.42774],
                [-99.20361, 19.42764],
                [-99.20363, 19.42763],
                [-99.20367, 19.42762],
                [-99.20377, 19.42759],
                [-99.20387, 19.42757],
                [-99.20393, 19.42765],
                [-99.20395, 19.42767]
              ]
            },
            properties: {
              name: null,
              address: null,
              type: "LineString"
            }
          }
        ]
      },
      route_id: "64cc913d907d69987cb1546b"
    },
    {
      route_title: "R02 CIVAC",
      geojson: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-99.313625, 19.56299]
            },
            properties: {
              name: "Kibo",
              address: "",
              type: "in"
            }
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [-99.403852, 19.42779]
            },
            properties: {
              name: "Sodexo",
              address: "",
              type: "out"
            }
          }
        ]
      },
      route_id: "64cc913d907d69987cb15999"
    }
  ];
  ;
  const LazyMapContainer= dynamic(() => import('../components/Map'), { ssr: false })

  return (
    <HomeProvider mapRoutes={exampleRoutes}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full">
        <LazyMapContainer/>
      </section>
      <CarList />
    </main>
    </HomeProvider>

  );
}
