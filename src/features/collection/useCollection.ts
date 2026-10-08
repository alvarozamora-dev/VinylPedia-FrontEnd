import { useState, useEffect } from 'react';
import type { VinylAlbum } from '@/features/catalog/types/catalog.types';

const STORAGE_KEY = 'vinylpedia_collection';

export function useCollection() {
  const [collection, setCollection] = useState<VinylAlbum[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error al cargar la colección desde localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
    } catch (error) {
      console.error('Error al guardar la colección en localStorage:', error);
    }
  }, [collection]);

  const addToCollection = (album: VinylAlbum) => {
    setCollection((prev) => {
      if (prev.some((item) => item.id === album.id)) return prev;
      return [...prev, album];
    });
  };

  const removeFromCollection = (albumId: string) => {
    setCollection((prev) => prev.filter((item) => item.id !== albumId));
  };

  const isInCollection = (albumId: string) => {
    return collection.some((item) => item.id === albumId);
  };

  return {
    collection,
    addToCollection,
    removeFromCollection,
    isInCollection,
  };
}
