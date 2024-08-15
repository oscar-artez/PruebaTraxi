const API_URL =
  ''

export default async function getMapRoutes(): Promise<[]> {
  const data = await fetch(API_URL)

  if (!data.ok) throw new Error('Failed to fetch data')

  return data.json()
}