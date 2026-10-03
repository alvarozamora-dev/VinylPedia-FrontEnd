import { useState, useMemo } from 'react';
import { VinylCard } from '../components/VinylCard';
import { CatalogFilters } from '../components/CatalogFilters';
import { ALBUMS_MOCK } from '../api/catalog.mock';

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('ALL');

  // Obtener géneros únicos dinámicamente desde la lista de álbumes
  const genres = useMemo(() => {
    const allGenres = ALBUMS_MOCK.map((album) => album.genre);
    return Array.from(new Set(allGenres));
  }, []);

  // Filtrar álbumes en tiempo real según búsqueda y género
  const filteredAlbums = useMemo(() => {
    return ALBUMS_MOCK.filter((album) => {
      const matchesSearch =
        album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        album.artist.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesGenre = selectedGenre === 'ALL' || album.genre === selectedGenre;

      return matchesSearch && matchesGenre;
    });
  }, [searchTerm, selectedGenre]);

  return (
    <div className="space-y-10">
      {/* Header e Introducción */}
      <header className="text-center space-y-3">
        {/* Controles de Filtro */}
        <CatalogFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          genres={genres}
        />

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          VinylPedia
        </h1>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          Explora la colección pública de acetatos, filtra tus géneros favoritos y gestiona tu
          estantería.
        </p>
      </header>

      {/* Grid Responsivo de Vinilos */}
      <section className="min-h-[300px]">
        {filteredAlbums.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-4">
            {filteredAlbums.map((album) => (
              <VinylCard key={album.id} album={album} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-2">
            <p className="text-slate-400 font-medium">No se encontraron vinilos</p>
            <p className="text-slate-600 text-xs">
              Intenta cambiando los criterios de búsqueda o seleccionando otro género.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
