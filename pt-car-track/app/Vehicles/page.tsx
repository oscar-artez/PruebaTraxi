
import { CarsData, carsDataWithPosition, columns } from "./columns"
import { DataTable } from "./data-table"


export default async function CarList() {
  const data = carsDataWithPosition;
  return (
    <div className=" mx-auto py-10 w-full">
      <DataTable columns={columns} data={data}  />
    </div>
  )
}
