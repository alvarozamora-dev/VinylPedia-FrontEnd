interface CatalogFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  genres: string[];
}

export function CatalogFilters({
  searchTerm,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  genres,
}: CatalogFiltersProps) {
  return (
    <div className="space-y-4 max-w-2xl mx-auto w-full">
      {/* 🔍 Input de Búsqueda */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por álbum o artista..."
          className="w-full bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* 🏷️ Filtros por Género */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => onGenreChange('ALL')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            selectedGenre === 'ALL'
              ? 'bg-teal-400 text-slate-950 font-semibold'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          Todos
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              selectedGenre === genre
                ? 'bg-teal-400 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}
