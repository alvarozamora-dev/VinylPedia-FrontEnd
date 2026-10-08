import { VinylCard } from '@/features/catalog/components/VinylCard';
import { useCollection } from '@/features/collection/useCollection';
import { Link } from 'react-router-dom';

export function CollectionPage() {
  const { collection } = useCollection();

  if (collection.length === 0) {
    return (
      <div className="text-center py-20 space-y-4 max-w-md mx-auto">
        <div className="text-5xl">💿</div>
        <h2 className="text-2xl font-bold text-slate-200">Tu estantería está vacía</h2>
        <p className="text-slate-400 text-sm">
          Aún no has agregado ningún vinilo a tu colección personal. Explora el catálogo y guarda
          tus preferidos.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm rounded-xl transition-colors"
        >
          Explorar Catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto py-6 px-4">
      <div className="flex justify-between items-end border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-100">Mi Estantería</h1>
          <p className="text-slate-400 text-sm mt-1">Colección personal de vinilos guardados.</p>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-slate-800 text-teal-400 rounded-full border border-slate-700">
          {collection.length} {collection.length === 1 ? 'Álbum' : 'Álbumes'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.map((album) => (
          <VinylCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}
