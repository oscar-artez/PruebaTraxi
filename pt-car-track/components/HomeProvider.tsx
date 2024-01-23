'use client'

import { CarsData } from '@/app/Vehicles/columns'
import HomeProviderContext, { HomeState } from '../app/context/home'
import { MapRoute } from '../app/models/types'
import { useState } from 'react'

type Props = {
  mapRoutes: MapRoute[]
  children: React.ReactNode
}

export default function HomeProvider(props: Props) {
  const [carSelected, setCarSelected] = useState<CarsData | null>(null)

  const initialState: HomeState = {
    mapRoutes: props.mapRoutes,
    carSelected,
    setCarSelected,
  }

  return (
    <HomeProviderContext.Provider value={initialState}>
      {props.children}
    </HomeProviderContext.Provider>
  )
}
