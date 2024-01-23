const API_URL =
  'https://nxflga6y8i.execute-api.us-east-1.amazonaws.com/route/dummy'

export default async function getMapRoutes(): Promise<[]> {
  const data = await fetch(API_URL)

  if (!data.ok) throw new Error('Failed to fetch data')

  return data.json()
}