import { VinylCard } from '@/features/catalog/components/VinylCard';
import { ALBUMS_MOCK } from '@/features/catalog/api/catalog.mock';

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 sm:p-12 gap-10">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          VinylPedia UI Test
        </h1>
        <p className="text-slate-400 text-sm max-w-sm mx-auto">
          Pasa el cursor sobre cualquiera de las portadas para desplegar el vinilo.
        </p>
      </header>

      {/* Grid / Layout con espaciado seguro en desktop y mobile */}
      <section className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-16 md:gap-28 py-4">
        {ALBUMS_MOCK.map((album) => (
          <VinylCard key={album.id} album={album} />
        ))}
      </section>
    </main>
  );
}
