import { useCatalogFilters } from '../hooks/useCatalogFilters';
import { GenreFilter } from '../components/GenreFilter';
import { VinylCard } from '../components/VinylCard';
import { ALBUMS_MOCK } from '../api/catalog.mock';
import { SearchBar } from '../components/SearchBar';

export function HomePage() {
  const { searchQuery, setSearchQuery, selectedGenre, setSelectedGenre, filteredAlbums } =
    useCatalogFilters(ALBUMS_MOCK);

  return (
    <div className="space-y-6 max-w-6xl mx-auto py-6 px-4">
      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold text-slate-100">Catálogo de Vinilos</h1>

        {/* Controles de Filtro */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="w-full md:w-72">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <GenreFilter selectedGenre={selectedGenre} onSelectGenre={setSelectedGenre} />
        </div>
      </div>

      {/* Grid de Resultados */}
      {filteredAlbums.length === 0 ? (
        <div className="text-center py-16 space-y-2">
          <p className="text-slate-400 text-base">No se encontraron álbumes.</p>
          <p className="text-slate-500 text-xs">Intenta con otro término de búsqueda o género.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAlbums.map((album) => (
            <VinylCard key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}
