import type { Genre } from '../types/catalog.types';

const GENRES: Genre[] = ['Todos', 'Rock Progresivo', 'Heavy Metal', 'Post-Hardcore', 'Pop', 'Jazz'];

interface GenreFilterProps {
  selectedGenre: Genre;
  onSelectGenre: (genre: Genre) => void;
}

export function GenreFilter({ selectedGenre, onSelectGenre }: GenreFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {GENRES.map((genre) => {
        const isActive = selectedGenre === genre;
        return (
          <button
            key={genre}
            onClick={() => onSelectGenre(genre)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
              isActive
                ? 'bg-teal-500 text-slate-950 border-teal-500 font-bold'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
            }`}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}
