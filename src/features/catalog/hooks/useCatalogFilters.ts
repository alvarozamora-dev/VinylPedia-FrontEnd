import { useState, useMemo } from 'react';
import type { VinylAlbum, Genre } from '../types/catalog.types';

export function useCatalogFilters(albums: VinylAlbum[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<Genre>('Todos');

  const filteredAlbums = useMemo(() => {
    return albums.filter((album) => {
      const matchesSearch =
        album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        album.artist.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGenre = selectedGenre === 'Todos' || album.genre === selectedGenre;

      return matchesSearch && matchesGenre;
    });
  }, [albums, searchQuery, selectedGenre]);

  return {
    searchQuery,
    setSearchQuery,
    selectedGenre,
    setSelectedGenre,
    filteredAlbums,
  };
}
