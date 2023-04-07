import { DummyProducts } from '@/features/dummy-data';

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <h1>Home</h1>
      <h2>Hello {process.env.hello}</h2>

      <DummyProducts />
    </main>
  );
}
