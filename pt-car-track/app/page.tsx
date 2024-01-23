
import HomeProvider from '@/components/HomeProvider';
import CarList from './Vehicles/page';
import getMapRoutes from './getRoutes';
import { MapRoute } from "./models/types";
import dynamic from 'next/dynamic';
export default async function Home() {

  const exampleRoutes: MapRoute[] = await getMapRoutes();
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
