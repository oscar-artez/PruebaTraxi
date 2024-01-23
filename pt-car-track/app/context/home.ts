import { MapRoute } from '../models/types'
import { CarsData, carsDataWithPosition } from '@/app/Vehicles/columns';

import { createContext } from 'react'

export interface HomeState {
  mapRoutes: MapRoute[],
  carSelected: CarsData | null
  setCarSelected: (value: CarsData | null) => void

}

export const defaultState: HomeState = {
  mapRoutes: [],
  carSelected: null,
  setCarSelected: () => {},

}

export default createContext(defaultState)
