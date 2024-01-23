"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import dataCars from '../../assets/carMock.json';

export type CarsData = {
placa: string,
"numero economico": string,
vim: string,
asientos: number,
seguro: string,
"segure numebr": string,
BRAND: string,
MODEL: string,
YEAR: number,
COLOR: string,
positionCar: [number, number]
}

function positionCar(min: number, max: number) {
  return Math.random() * (max - min) + min
}


export const carsDataWithPosition: CarsData[] = dataCars.map((carData) => ({
  ...carData,
  positionCar: [positionCar(19.4, 19.6), positionCar(-99.16, -99.29)], 
}));


export const columns: ColumnDef<CarsData>[] = [
  {
    accessorKey: "placa",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Placa
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "numero economico",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Numero Economico
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },  },
  {
    accessorKey: "vim",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Vim
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },  },
  {
    accessorKey: "asientos",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Asientos
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },  },
  {
    accessorKey: "seguro",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Seguro
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },  },
  {
    accessorKey: "segure numebr",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Numero de Seguro
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },  },
  {
    accessorKey: "BRAND",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Marca
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },  },
  {
    accessorKey: "MODEL",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Modelo
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },  },
  {
    accessorKey: "YEAR",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Año
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },  },
  {
    accessorKey: "COLOR",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Color
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },  },
]


