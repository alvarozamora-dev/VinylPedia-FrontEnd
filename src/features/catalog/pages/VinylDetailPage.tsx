import { useParams, Link, useNavigate } from 'react-router-dom';
import { getAlbumById } from '../api/catalog.mock';
import { Button } from '@/components/ui/button';
import { TracklistSection } from '../components/TracklistSection';
import { useCollection } from '@/features/collection/useCollection';

export function VinylDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCollection, removeFromCollection, isInCollection } = useCollection();

  const album = id ? getAlbumById(id) : undefined;

  if (!album) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-slate-200">Vinilo no encontrado</h2>
        <p className="text-slate-400 text-sm">
          El álbum que estás buscando no existe o fue removido del catálogo.
        </p>
        <Button onClick={() => navigate('/')} variant="outline">
          Volver al catálogo
        </Button>
      </div>
    );
  }

  const inCollection = isInCollection(album.id);

  const handleToggleCollection = () => {
    if (inCollection) {
      removeFromCollection(album.id);
    } else {
      addToCollection(album);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto py-6 px-4">
      <Link
        to="/"
        className="inline-flex items-center text-xs font-medium text-slate-400 hover:text-teal-400 transition-colors"
      >
        ← Volver al catálogo
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
          <img
            src={album.coverUrl}
            alt={album.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-6">
          <div>
            <span className="inline-block px-2.5 py-1 text-[10px] font-semibold tracking-wider text-teal-400 uppercase bg-teal-950/60 border border-teal-800/50 rounded-full mb-3">
              {album.genre}
            </span>
            <h1 className="text-3xl font-extrabold text-slate-100">{album.title}</h1>
            <p className="text-lg font-medium text-slate-400 mt-1">{album.artist}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm text-slate-400 border-y border-slate-800/80 py-4">
            <div>
              <span className="block text-xs text-slate-500">Año</span>
              <span className="font-semibold text-slate-200">{album.year}</span>
            </div>
            <div>
              <span className="block text-xs text-slate-500">Formato</span>
              <span className="font-semibold text-slate-200">{album.speed || '33 RPM'}</span>
            </div>
            <div>
              <span className="block text-xs text-slate-500">Discográfica</span>
              <span className="font-semibold text-slate-200 truncate block">
                {album.label || 'N/A'}
              </span>
            </div>
          </div>

          {/* Botón dinámico según el estado de la colección */}
          <Button
            onClick={handleToggleCollection}
            className={`w-full font-bold py-3 rounded-xl transition-all shadow-lg ${
              inCollection
                ? 'bg-rose-950/80 hover:bg-rose-900 text-rose-300 border border-rose-800/50 shadow-rose-950/20'
                : 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-teal-500/10'
            }`}
          >
            {inCollection ? '✓ En tu Estantería (Quitar)' : '+ Agregar a Mi Estantería'}
          </Button>
        </div>
      </div>

      <TracklistSection tracks={album.tracklist} />
    </div>
  );
}
