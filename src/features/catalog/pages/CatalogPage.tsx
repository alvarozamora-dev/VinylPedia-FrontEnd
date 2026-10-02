import { VinylCard } from '../components/VinylCard';
import { ALBUMS_MOCK } from '../api/catalog.mock';

export function CatalogPage() {
  return (
    <div className="space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          Catálogo de Vinilos
        </h1>
        <p className="text-slate-400 text-sm max-w-sm mx-auto">
          Explora la colección pública de acetatos.
        </p>
      </header>

      <section className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-16 md:gap-28 py-4">
        {ALBUMS_MOCK.map((album) => (
          <VinylCard key={album.id} album={album} />
        ))}
      </section>
    </div>
  );
}
